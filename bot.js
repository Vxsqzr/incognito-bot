const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('▲ Escanea el QR:');
});

client.on('ready', () => {
    console.log('¡Incognito Bot Activo!');
});

client.on('message', async (msg) => {
    if (msg.body.startsWith('!addon')) {
        msg.reply('🔄 Analizando Bedrock Pack...');
    }
});

client.initialize();
