import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({
                error: 'Not logged in. Please sign in first, then visit this URL again.'
            }, { status: 401 });
        }

        const { error: updateError } = await supabase
            .from('profiles')
            .update({ plan: 'pro' })
            .eq('id', user.id);

        if (updateError) throw updateError;

        return new NextResponse(`
            <html>
                <body style="font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #f8fafc;">
                    <div style="background: white; padding: 3rem; border-radius: 2rem; shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); text-align: center;">
                        <h1 style="color: #4F46E5; font-size: 3rem; margin-bottom: 1rem;">Success!</h1>
                        <p style="font-size: 1.25rem; color: #475569; margin-bottom: 2rem;">Your account (<strong>${user.email}</strong>) has been upgraded to <strong>PRO OWNER</strong> status.</p>
                        <a href="/dashboard" style="background: #0F172A; color: white; padding: 1rem 2.5rem; border-radius: 1rem; text-decoration: none; font-weight: bold; transition: all 0.2s;">Enter Command Center</a>
                    </div>
                </body>
            </html>
        `, {
            headers: { 'Content-Type': 'text/html' }
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
