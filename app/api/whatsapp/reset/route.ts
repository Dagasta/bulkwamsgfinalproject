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

        // 1. Disconnect active socket
        disconnectBaileys(userId);

        // 2. Clear auth directory
        const authDir = path.join(process.cwd(), '.baileys_auth', `session-${userId}`);
        if (fs.existsSync(authDir)) {
            fs.rmSync(authDir, { recursive: true, force: true });
        }

        return NextResponse.json({ success: true, message: 'Session reset successfully' });
    } catch (error) {
        console.error('[Baileys Reset] ❌ Error:', error);
        return NextResponse.json({ error: 'Failed to reset session' }, { status: 500 });
    }
}
