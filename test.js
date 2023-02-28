require('dotenv').config();
const { BotTelegram } = require('./index');

const bot = new BotTelegram(
    process.env.BOT_TOKEN,
    process.env.CHANNEL_ID,
    "my-service",
    false,
);

(async () => {
    await bot.info(
        "aaaaa"
        , [
            'https://twitter.com/elonmusk/status/1630285709654343683',
            'https://twitter.com/elonmusk/status/1630285709654343683',
            'https://twitter.com/elonmusk/status/1630285709654343683',
            'https://twitter.com/elonmusk/status/1630285709654343683',
        ]
    );
    // await bot.warn("Notice please!!!!");
    // const err = new Error("Connect db error");
    // await bot.error(`System error: ${err}`);
})()