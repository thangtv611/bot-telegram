# ddv-bot-telegram
Broadcast message to Telegram Channel or Group.

## Using
- Install as npm package via: [https://www.npmjs.com/package/bot-telegram-lz096](https://www.npmjs.com/package/bot-telegram-lz096)
- Construct new instance of bot:
```javascript
const { BotTelegram } = require('bot-telegram-lz096');

const bot = new BotTelegram("BOT_ID", "CHANNEL_ID", "my-service", false);

bot.log("Hello there!").then();
```