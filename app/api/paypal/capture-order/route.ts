import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { orderID } = await req.json();

        // PayPal API details
        const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
        const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
        const environment = process.env.PAYPAL_MODE || (process.env.NODE_ENV === 'production' ? 'live' : 'sandbox');
        const endpoint = environment === 'live'
            ? 'https://api-m.paypal.com'
            : 'https://api-m.sandbox.paypal.com';

        // 1. Get Access Token
        const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        const tokenResponse = await fetch(`${endpoint}/v1/oauth2/token`, {
            method: 'POST',
            body: 'grant_type=client_credentials',
            headers: {
                Authorization: `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const tokenData = await tokenResponse.json();
        const { access_token } = tokenData;

        if (!access_token) {
            console.error('[PayPal Capture] Token Error:', tokenData);
            return NextResponse.json({ error: 'Failed to authenticate with PayPal' }, { status: 500 });
        }

        // 2. Capture Order
        const captureResponse = await fetch(`${endpoint}/v2/checkout/orders/${orderID}/capture`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`,
            },
        });

        const captureData = await captureResponse.json();

        if (!captureResponse.ok) {
            console.error('[PayPal Capture] Request Failed:', captureData);
            return NextResponse.json({ error: 'PayPal Capture Failed', details: captureData }, { status: captureResponse.status });
        }

        if (captureData.status === 'COMPLETED') {
            console.log(`[PayPal Capture] Payment completed for user: ${user.id}`);

            // 3. Update User Plan to Pro in Supabase
            // Use upsert to handle cases where the profile record might not exist yet
            const { error: updateError } = await supabase
                .from('profiles')
                .upsert({
                    id: user.id,
                    email: user.email,
                    plan: 'pro',
                    updated_at: new Date().toISOString()
                }, { onConflict: 'id' });

            if (updateError) {
                console.error('[Supabase Update Error] Failed to upgrade account:', updateError);
                return NextResponse.json({
                    error: 'Payment successful but profile upgrade failed',
                    message: updateError.message,
                    details: updateError
                }, { status: 500 });
            }

            console.log('[PayPal Capture] Profile successfully upgraded to PRO');
            return NextResponse.json({ success: true, data: captureData });
        }

        return NextResponse.json({ success: false, data: captureData });
    } catch (error: any) {
        console.error('PayPal Capture Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
