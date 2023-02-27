# ddv-bot-telegram
Broadcast message to Telegram Channel or Group.

## Using
- Install as npm package via: [https://www.npmjs.com/package/ddv-bot-telegram](https://www.npmjs.com/package/ddv-bot-telegram)
- Construct new instance of bot:
```javascript
const { DDVTelegramBot } = require('ddv-bot-telegram');

const bot = new DDVTelegramBot("BOT_ID", "CHANNEL_ID", "my-service");

bot.log("Xin chao!!!").then();
```