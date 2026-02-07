import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
export const dynamic = 'force-dynamic';
import fs from 'fs';
import path from 'path';
import { disconnectBaileys } from '@/lib/whatsapp/baileys-client';

export async function POST() {
    try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        const userId = user?.id || 'guest-user';

        console.log(`[Baileys Reset] 🔄 Resetting connection for user: ${userId}`);

        // 1. Disconnect and Purge EVERY trace (Memory + Disk Pattern Match)
        disconnectBaileys(userId);

        // 2. Global-Sync: Wipe DB state for a truly fresh start
        import('@/lib/supabase/service').then(({ createServiceClient }) => {
            createServiceClient().from('profiles').update({
                whatsapp_linked: false,
                whatsapp_status: 'idle',
                whatsapp_qr: null,
                whatsapp_session: null
            }).eq('id', userId);
        });

        // 3. Extra delay to ensure locks are released by OS
        await new Promise(r => setTimeout(r, 1000));

        return NextResponse.json({ success: true, message: 'Neural network reconstructed successfully' });
    } catch (error) {
        console.error('[Baileys Reset] ❌ Error:', error);
        return NextResponse.json({ error: 'Failed to reset session' }, { status: 500 });
    }
}
