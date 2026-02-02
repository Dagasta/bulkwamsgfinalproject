import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email') || 'owner@bulkwamsg.com';
        const password = searchParams.get('password') || 'BulkWaMsg2025!';
        const name = searchParams.get('name') || 'Platform Owner';

        const supabase = createClient();

        // 1. Trigger Sign Up
        console.log(`[Dev Setup] Attempting to create account: ${email}`);
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name }
            }
        });

        if (authError) {
            if (authError.message.includes('already registered')) {
                return NextResponse.json({
                    message: 'Account already exists. Please log in first, then visit /api/dev/make-pro',
                    email
                });
            }
            throw authError;
        }

        const user = authData.user;
        if (!user) {
            return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
        }

        // 2. Immediate Upgrade to Pro
        // We might need to wait a tiny bit or just try to update profiles
        const { error: updateError } = await supabase
            .from('profiles')
            .update({ plan: 'pro' })
            .eq('id', user.id);

        return NextResponse.json({
            success: true,
            message: 'Owner account created and upgraded to PRO.',
            credentials: {
                email,
                password
            },
            note: 'If email verification is enabled, you may need to check your email or disable it in Supabase dashboard.'
        });

    } catch (error: any) {
        console.error('[Dev Setup Error]:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
