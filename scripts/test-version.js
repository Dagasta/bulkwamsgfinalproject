const { default: makeWASocket, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');

async function testVersion() {
    try {
        console.log('Fetching latest version...');
        const { version, isLatest } = await fetchLatestBaileysVersion();
        console.log('Version:', version);
        console.log('Is latest:', isLatest);
    } catch (err) {
        console.error('Fetch failed:', err.message);
    }
}

testVersion();
