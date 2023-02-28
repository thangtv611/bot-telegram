const axios = require("axios");
const url = require("url");

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

    buildMessage(msg, level, urls) {
        const _msg = this.decor ? `${level} <pre>${msg}</pre>` : `${level}\n ${msg}`;

        if (!urls || !urls.length) {
            return _msg;
        }

        let links = `\n\nLinks:\n`;
        urls.forEach(url => {
            links += `<a href="${url}">${url}</a>`
        });

        return `${_msg}\n${links}`
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

    async warning(msg, urls) {
        const message = this.buildMessage(msg, '⚠️⚠️⚠️⚠️⚠️', urls);
        await this.sendMessage(message);
    }

    async alert(msg, urls) {
        const message = this.buildMessage(msg, '🔥🔥🔥🔥🔥', urls);
        await this.sendMessage(message);
    }

    async info(msg, urls) {
        const message = this.buildMessage(msg, '😀😀😀😀😀', urls);
        await this.sendMessage(message);
    }
}

module.exports = {
    BotTelegram,
};