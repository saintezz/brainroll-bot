import { Bot, InlineKeyboard, webhookCallback } from "grammy/web";

const { Bot, InlineKeyboard } = require('grammy');


const BOT_TOKEN = '8420621745:AAEJtIy_Wd7t4_ThWvEkhyMf_QgksVU_BMw';
const WEBAPP_URL = 'https://saintezz.github.io/BrainrotWin/';

const bot = new Bot(BOT_TOKEN);

// Команда /start
bot.command('start', async (ctx) => {
    // Делаем кнопку жуткой и тематической
    const keyboard = new InlineKeyboard().webApp('🎃 ВОЙТИ В ТЕМНОТУ', WEBAPP_URL);

    const halloweenText = 
        '🕷️ <b>ДОБРО ПОЖАЛОВАТЬ В BRAINROLL</b> 🕷️\n\n' +
        'Ты осмелился открыть эту дверь? Здесь обитают самые безумные брейнроты...\n\n' +
        '👻 Нажми на кнопку ниже, чтобы начать охоту за душами и монетами:\n\n' +
        '<i>Остерегайся проклятых кейсов...</i>';

    await ctx.reply(halloweenText, {
        parse_mode: 'HTML',
        reply_markup: keyboard
    });
});

// Обработка остальных сообщений
bot.on('message', async (ctx) => {
    if (ctx.message.text && ctx.message.text.startsWith('/start')) return;
    
    await ctx.reply('🕸️ Напиши /start, чтобы открыть портал в мир BrainRoll...');
});

// Запуск
bot.start({
    onStart: (botInfo) => console.log(`✅ Жуткий бот @${botInfo.username} пробудился...`),
});