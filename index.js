const axios = require("axios");

class BotTelegram {
    botId;
    channels;
    prefix;
    decor;

    constructor(botId, channelId, serviceName, decor = true) {
        this.prefix = serviceName;
        this.botId = botId;
        this.channels = [ channelId ];
        this.decor = decor;
    }

    buildMessage(msg, level) {
        return this.decor ? `${level} <pre>${msg}</pre>` : `${level}\n ${msg}`;
    }

    async sendMessage(msg) {
        try {
            const TELEGRAM_API = `https://api.telegram.org/bot${this.botId}/sendMessage`;
            const text = encodeURIComponent(msg);

            await Promise.all(this.channels.map(channel => {
                const url = `${TELEGRAM_API}?chat_id=${channel}&text=${text}&parse_mode=html`;
                return axios.get(url, { muteHttpExceptions: true });
            }));
        } catch (err) {
            console.log(err);
        }
    }

    async warning(msg) {
        const message = this.buildMessage(msg, '⚠️⚠️⚠️⚠️⚠️');
        await this.sendMessage(message);
    }

    async alert(msg) {
        const message = this.buildMessage(msg, '🔥🔥🔥🔥🔥');
        await this.sendMessage(message);
    }

    async info(msg) {
        const message = this.buildMessage(msg, '😀😀😀😀😀');
        await this.sendMessage(message);
    }
}

module.exports = {
    BotTelegram,
};