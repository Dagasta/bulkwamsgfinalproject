import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
    try {
        const payload = await req.json();
        const event = payload.event;
        const data = payload.payment_intent;

        console.log(`[Ziina Webhook] Event received: ${event}`);

        if (event === 'payment_intent.completed' || event === 'payment_intent.succeeded') {
            const userId = data.metadata?.userId;
            const planId = data.metadata?.planId;

            if (userId) {
                console.log(`[Ziina Webhook] Payment completed for user: ${userId}, plan: ${planId}`);

                const supabase = createClient();

                // Calculate expiration date
                const now = new Date();
                let expiresAt = new Date();
                if (planId === 'pro-monthly') {
                    expiresAt.setDate(now.getDate() + 30);
                } else if (planId === 'pro-yearly') {
                    expiresAt.setFullYear(now.getFullYear() + 1);
                } else {
                    // Default to 30 days if planId is missing but payment succeeded
                    expiresAt.setDate(now.getDate() + 30);
                }

                const { error: updateError } = await supabase
                    .from('profiles')
                    .upsert({
                        id: userId,
                        plan: 'pro',
                        expires_at: expiresAt.toISOString(),
                        updated_at: now.toISOString()
                    }, { onConflict: 'id' });

                if (updateError) {
                    console.error('[Ziina Webhook] Supabase update error:', updateError);
                } else {
                    console.log('[Ziina Webhook] Profile successfully upgraded to PRO');
                }
            }
        }

        return NextResponse.json({ received: true });
    } catch (error: any) {
        console.error('Ziina Webhook Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
