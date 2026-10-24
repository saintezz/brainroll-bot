import { Bot, InlineKeyboard, webhookCallback } from "grammy";
const { Bot, InlineKeyboard } = require('grammy');

const BOT_TOKEN = '8420621745:AAEJtIy_Wd7t4_ThWvEkhyMf_QgksVU_BMw';
const WEBAPP_URL = 'https://saintezz.github.io/BrainrotWin/';

const bot = new Bot(BOT_TOKEN);

bot.command('start', async (ctx) => {
    const keyboard = new InlineKeyboard().webApp('🚀 ОТКРЫТЬ', WEBAPP_URL);

    await ctx.reply(
        '🎮 <b>ЛУЧШИЙ БРАИНРОТ БТ</b>\n\n' +
        '👇 Нажми на кнопку ниже, чтобы открыть мини-приложение:',
        { parse_mode: 'HTML', reply_markup: keyboard }
    );
});

bot.on('message', async (ctx) => {
    if (ctx.message.text && ctx.message.text.startsWith('/start')) return;
    await ctx.reply('Напиши /start, чтобы открыть приложение.');
});

bot.start({
    onStart: (botInfo) => console.log(`✅ Бот @${botInfo.username} запущен`),
});
