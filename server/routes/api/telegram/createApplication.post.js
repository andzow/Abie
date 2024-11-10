import { sendApplication } from "~/server/utils/telegram/sendApplication"
export default defineEventHandler(async (event) => {
    let dto = await readBody(event);
    const message = `
    Новая заявка:
    
    - Имя: ${dto.about.name}
    - Телефон: ${dto.about.number}
    - Компания: ${dto.about.nameCompany}
    - Email: ${dto.about.mail}
    
    - Отрасль: ${dto.branch}
    - Задача: ${dto.task}
    - Информация о задаче: ${dto.taskInfo}
    
    - Бюджет: ${dto.budget}
    `;
    await sendApplication(893577326, message)
});