import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/route-handler';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const supabase = createClient();
        const now = new Date();

        const { data: campaigns, error } = await supabase
            .from('campaigns')
            .select('id, name, status, scheduled_at, timezone')
            .order('created_at', { ascending: false })
            .limit(5);

        return NextResponse.json({
            status: "Online",
            server_time: now.toISOString(),
            user_session: "Detected",
            db_error: error,
            campaigns: campaigns
        });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
