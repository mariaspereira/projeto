// para começar: importando uma classe (módulo "especial" dentro da biblioteca Telegraf
const { Telegraf } = require('telegraf')

// inicializando o bot
const bot = new Telegraf("6611551700:AAHiNlT758KLb3wEPzjHfHfqInqvxHBiw7g")
//https://api.telegram.org/bot<6611551700:AAHiNlT758KLb3wEPzjHfHfqInqvxHBiw7g>/getUpdates
//bot.algumacoisa = tem acesso a todas os comandos que eu posso fazer com o BOT do Telegram
//canal de mensagens (conversação) para clientes (via sistema)

bot.telegram.sendMessage(6030776771, "Teste");
//pega 2 parâmetros - 1ª chatID; 2ª Texto que quer enviar


//bot.start((ctx) => ctx.reply('Welcome'))
//bot.help((ctx) => ctx.reply('Send me a sticker'))
//bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

console.log("Bot rodando")