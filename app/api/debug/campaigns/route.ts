import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/route-handler';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const supabase = createClient();

        const now = new Date();
        const nowISO = now.toISOString();

        const { data: allCampaigns, error: fetchError } = await supabase
            .from('campaigns')
            .select('id, name, status, scheduled_at, timezone')
            .order('created_at', { ascending: false })
            .limit(10);

        return NextResponse.json({
            serverTime: nowISO,
            localTime: now.toLocaleString(),
            error: fetchError,
            campaigns: allCampaigns
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
