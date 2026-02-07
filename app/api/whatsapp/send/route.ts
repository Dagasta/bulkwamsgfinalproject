import { NextRequest, NextResponse } from 'next/server';
import { sendBaileysMessage, sendBaileysBulkMessages } from '@/lib/whatsapp/baileys-client';
import { createClient } from '@/lib/supabase/server';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        // Get authenticated user
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        // For local development, allow guest user if no auth is configured
        const userId = user?.id || 'guest-user';

        const body = await request.json();
        const { type, to, message, contacts, mediaList } = body;

        // Process media if present (support both single media and mediaList)
        const incomingMedia = mediaList || (body.media ? [body.media] : []);
        const processedMediaList: any[] = [];

        for (const media of incomingMedia) {
            if (media.data) {
                processedMediaList.push({
                    buffer: Buffer.from(media.data, 'base64'),
                    mimetype: media.mimetype,
                    filename: media.filename
                });
            } else if (media.url) {
                processedMediaList.push({
                    url: media.url,
                    mimetype: media.mimetype,
                    filename: media.filename
                });
            }
        }

        // --- Automatic Contact Saving ---
        if (user?.id) {
            try {
                const contactsToSave = type === 'single'
                    ? [{ phone: to as string, name: to as string }]
                    : contacts.map((c: { phone: string; name?: string }) => ({ phone: c.phone, name: c.name || c.phone }));

                const now = new Date().toISOString();
                const uniqueContacts = contactsToSave.map((c: { phone: string; name: string }) => ({
                    user_id: user.id,
                    phone: c.phone.replace(/\D/g, ''),
                    name: c.name,
                    status: 'active',
                    tags: ['broadcast-recipient'],
                    last_message: message || contacts[0]?.message || '',
                    last_sent_at: now
                }));

                const seenPhones = new Set();
                const deduplicated = uniqueContacts.filter((c: { user_id: string; phone: string }) => {
                    const id = `${c.user_id}-${c.phone}`;
                    if (seenPhones.has(id)) return false;
                    seenPhones.add(id);
                    return true;
                });

                await supabase.from('contacts').upsert(deduplicated, { onConflict: 'user_id,phone' });
            } catch (err) {
                console.error('[Contact Save Error]:', err);
                // Continue sending even if contact save fails
            }
        }
        // ------------------------------

        if (type === 'single') {
            // Send single message
            if (!to || !message) {
                return NextResponse.json(
                    { error: 'Phone number and message are required' },
                    { status: 400 }
                );
            }

            await sendBaileysMessage(userId, to, message, processedMediaList);
            return NextResponse.json({ success: true, message: 'Message sent successfully' });
        } else if (type === 'bulk') {
            // Send bulk messages (ALWAYS ASYNC via worker to prevent timeouts)
            if (!contacts || !Array.isArray(contacts)) {
                return NextResponse.json({ error: 'Contacts array is required' }, { status: 400 });
            }

            const { scheduledAt } = body;
            const isManualSend = !scheduledAt;
            const targetTime = scheduledAt ? new Date(scheduledAt).toISOString() : new Date().toISOString();

            // Fetch user plan status
            const { data: profile } = await supabase
                .from('profiles')
                .select('plan, expires_at')
                .eq('id', user?.id)
                .single();

            const now = new Date();
            const expiryDate = profile?.expires_at ? new Date(profile.expires_at) : null;
            const userPlan = (profile?.plan === 'pro' && (!expiryDate || expiryDate > now)) ? 'pro' : 'free';
            const isOwner = user?.email === 'owner@bulkwamsg.com';

            if (userPlan !== 'pro' && !isOwner && contacts.length > 10) {
                return NextResponse.json(
                    { error: 'Limited Access Mode: Free tier is limited to 10 contacts per campaign. Please upgrade to PRO for unlimited reach.' },
                    { status: 403 }
                );
            }

            // 1. Create Campaign (Status: queued for manual, scheduled for timed)
            const campaignName = body.name || `Bulk ${new Date().toLocaleDateString()}`;
            console.log(`[API] Creating campaign: ${campaignName} (Manual: ${isManualSend})`);

            const { data: campaign, error: campaignError } = await supabase
                .from('campaigns')
                .insert({
                    user_id: user?.id,
                    name: campaignName,
                    message: contacts[0]?.message || '',
                    status: isManualSend ? 'queued' : 'scheduled',
                    recipients_count: contacts.length,
                    scheduled_at: targetTime,
                    timezone: body.timezone || 'UTC',
                    media: processedMediaList.length > 0 ? processedMediaList : null
                })
                .select()
                .single();

            if (campaignError) {
                console.error('[API] Campaign Creation Error:', campaignError);
                throw campaignError;
            }

            // 2. Insert Message Logs
            if (campaign) {
                const messageLogs = contacts.map((c: any) => ({
                    campaign_id: campaign.id,
                    user_id: user?.id,
                    phone: c.phone,
                    message: c.message || contacts[0]?.message || '',
                    status: 'pending'
                }));

                const { error: msgInsertError } = await supabase.from('messages').insert(messageLogs);
                if (msgInsertError) {
                    console.error('[API] Message Log Insert Error:', msgInsertError);
                    throw msgInsertError;
                }
            }

            // 3. Fast-Track Kick for Manual Sends
            if (isManualSend) {
                const workerUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/worker/process`;
                fetch(workerUrl).catch(e => console.log('[Worker Kick Failed]:', e));
            }

            return NextResponse.json({
                success: true,
                message: isManualSend
                    ? `Mission Initiated! Tracking ${contacts.length} signals...`
                    : `Campaign scheduled for ${new Date(scheduledAt).toLocaleString()}`,
                status: isManualSend ? 'queued' : 'scheduled'
            });
        }
        else {
            return NextResponse.json(
                { error: 'Invalid type. Use "single" or "bulk"' },
                { status: 400 }
            );
        }
    } catch (error: any) {
        console.error('Send message error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to send message' },
            { status: 500 }
        );
    }
}
