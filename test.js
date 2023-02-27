require('dotenv').config();
const {BotTelegram} = require('./index');

const bot = new BotTelegram(
    process.env.BOT_TOKEN,
    process.env.CHANNEL_ID,
    "my-service",
    false,
);

(async () => {
    await bot.info("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
    // await bot.warn("Notice please!!!!");
    // const err = new Error("Connect db error");
    // await bot.error(`System error: ${err}`);
})()