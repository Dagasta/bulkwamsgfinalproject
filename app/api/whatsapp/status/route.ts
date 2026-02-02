import { NextResponse } from 'next/server';
import { initializeBaileysWhatsApp, getBaileysQRCode, isBaileysReady, isBaileysInitializing } from '@/lib/whatsapp/baileys-client';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        // Get authenticated user (optional for QR code display)
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        // Use user ID if authenticated, otherwise use a guest ID
        const userId = user?.id || 'guest-user';

        console.log(`[Baileys Status] 📨 GET /api/whatsapp/status for user: ${userId}${user ? '' : ' (guest)'}`);

        // Initialize Baileys WhatsApp client for this user if not already done
        await initializeBaileysWhatsApp(userId);

        const qrCode = getBaileysQRCode(userId);
        const ready = isBaileysReady(userId);
        const initializing = isBaileysInitializing(userId);

        console.log(`[Baileys Status] 📊 User ${userId} - Ready: ${ready}, QR: ${!!qrCode}, Init: ${initializing}`);

        return NextResponse.json({
            qrCode,
            ready,
            initializing,
            message: ready
                ? 'WhatsApp is connected'
                : qrCode
                    ? 'Scan QR code to connect'
                    : initializing
                        ? 'Initializing WhatsApp...'
                        : 'Starting connection...'
        });
    } catch (error) {
        console.error('[Baileys Status] ❌ API error:', error);
        return NextResponse.json(
            { error: 'Failed to get WhatsApp status', details: String(error) },
            { status: 500 }
        );
    }
}
