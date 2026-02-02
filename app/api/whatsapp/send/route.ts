import { NextRequest, NextResponse } from 'next/server';
import { sendBaileysMessage, sendBaileysBulkMessages } from '@/lib/whatsapp/baileys-client';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
    try {
        // Get authenticated user
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        // For local development, allow guest user if no auth is configured
        const userId = user?.id || 'guest-user';

        const body = await request.json();
        const { type, to, message, contacts, media } = body;

        // Process media if present
        let processedMedia = undefined;
        if (media && media.data) {
            // Data is base64 string
            const buffer = Buffer.from(media.data, 'base64');
            processedMedia = {
                buffer,
                mimetype: media.mimetype,
                filename: media.filename
            };
        } else if (media && media.url) {
            processedMedia = {
                url: media.url,
                mimetype: media.mimetype,
                filename: media.filename
            };
        }

        if (type === 'single') {
            // Send single message
            if (!to || !message) {
                return NextResponse.json(
                    { error: 'Phone number and message are required' },
                    { status: 400 }
                );
            }

            await sendBaileysMessage(userId, to, message, processedMedia);
            return NextResponse.json({ success: true, message: 'Message sent successfully' });
        } else if (type === 'bulk') {
            // Send bulk messages
            if (!contacts || !Array.isArray(contacts)) {
                return NextResponse.json(
                    { error: 'Contacts array is required' },
                    { status: 400 }
                );
            }

            // Fetch user plan status
            const { data: profile } = await supabase
                .from('profiles')
                .select('plan')
                .eq('id', user?.id)
                .single();

            const userPlan = profile?.plan || 'free';
            const isOwner = user?.email === 'owner@bulkwamsg.com';

            // Limit free users
            if (userPlan !== 'pro' && !isOwner && contacts.length > 10) {
                return NextResponse.json(
                    { error: 'Limited Access Mode: Free tier is limited to 10 contacts per campaign. Please upgrade to PRO for unlimited reach.' },
                    { status: 403 }
                );
            }

            // 1. Create Campaign in Database for Analytics
            const campaignName = body.name || `Bulk ${new Date().toLocaleDateString()}`;
            const { data: campaign, error: campaignError } = await supabase
                .from('campaigns')
                .insert({
                    user_id: user?.id,
                    name: campaignName,
                    message: contacts[0]?.message || '',
                    status: 'sending',
                    recipients_count: contacts.length
                })
                .select()
                .single();

            if (campaignError) console.error('Error creating campaign:', campaignError);

            // 2. Perform Sending
            const results = await sendBaileysBulkMessages(userId, contacts, processedMedia);

            // 3. Log results to messages table for precision tracking
            if (campaign) {
                const successfulCount = results.filter((r: any) => r.success).length;

                // Update campaign status
                await supabase
                    .from('campaigns')
                    .update({
                        status: 'completed',
                        sent_count: successfulCount
                    })
                    .eq('id', campaign.id);

                // Batch insert messages
                const messageLogs = results.map((r: any) => ({
                    campaign_id: campaign.id,
                    user_id: user?.id,
                    phone: r.phone,
                    message: contacts[0]?.message || '',
                    status: r.success ? 'sent' : 'failed'
                }));

                await supabase.from('messages').insert(messageLogs);
            }

            return NextResponse.json({ success: true, results });
        } else {
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
