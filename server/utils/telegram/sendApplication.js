import TelegramBot from 'node-telegram-bot-api';

export const sendApplication = async (chatId, message) => {
    try {
        const token = '7626668792:AAGKClLzuKfVXil71s_3pRhglbFM8YXGn8g';
        const bot = new TelegramBot(token, {polling: true});
        await bot.sendMessage(chatId, message);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}