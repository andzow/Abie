import TelegramBot from 'node-telegram-bot-api';

export const sendApplication = async (chatId, message) => {
    try {
        const token = process.env.TELEGRAM_TOKEN;
        const bot = new TelegramBot(token, {polling: true});
        await bot.sendMessage(chatId, message);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}