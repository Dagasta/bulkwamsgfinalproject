import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
    try {
        const { planId, test = true } = await req.json();

        // Prices in AED
        const amount = planId === 'pro-monthly' ? 10 : 120;
        const amountInFils = amount * 100;

        if (!amountInFils) {
            return NextResponse.json({ error: 'Invalid plan selected' }, { status: 400 });
        }

        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

        const response = await fetch('https://api-v2.ziina.com/api/payment_intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.ZIINA_API_KEY}`,
            },
            body: JSON.stringify({
                amount: amountInFils,
                currency_code: 'USD',
                success_url: `${siteUrl}/dashboard?success=true`,
                cancel_url: `${siteUrl}/pricing?canceled=true`,
                test: false,
                metadata: {
                    userId: user.id,
                    planId: planId
                }
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Ziina API Error Details:', JSON.stringify(data, null, 2));
            return NextResponse.json({
                error: data.message || data.error || 'Ziina API Error',
                details: data
            }, { status: response.status });
        }

        return NextResponse.json({ redirect_url: data.redirect_url, id: data.id });
    } catch (error: any) {
        console.error('Ziina Checkout Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
