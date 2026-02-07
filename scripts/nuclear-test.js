const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, DisconnectReason } = require('@whiskeysockets/baileys');
const QRCode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');

async function testConnection() {
    const userId = 'nuclear-test-' + Date.now();
    const authDir = path.join(process.cwd(), '.baileys_auth', userId);

    console.log(`[Nuclear] 🚀 Starting test for ${userId} in ${authDir}`);

    const { state, saveCreds } = await useMultiFileAuthState(authDir);
    const { version } = await fetchLatestBaileysVersion();

    console.log(`[Nuclear] 📦 Version: ${version}`);

    const sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: true,
        browser: ['Mac OS', 'Chrome', '121.0.0.0'],
        connectTimeoutMs: 60000,
        syncFullHistory: false,
        shouldSyncHistoryMessage: () => false,
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log('[Nuclear] 📱 SCAN THIS QR CODE:');
        }

        if (connection === 'open') {
            console.log('[Nuclear] ✅ CONNECTED SUCCESSFULLY!');
            process.exit(0);
        }

        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('[Nuclear] 🛑 Connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect);
            if (!shouldReconnect) process.exit(1);
        }
    });

    // Safety timeout
    setTimeout(() => {
        console.log('[Nuclear] ⏰ Test timed out (5 mins)');
        process.exit(1);
    }, 300000);
}

testConnection().catch(err => {
    console.error('[Nuclear] ❌ Fatal Error:', err);
    process.exit(1);
});
