import { useStorageStore } from '~/stores/storage'

export const findElement = ():void => {
    const title = document.querySelector('.header__title') as HTMLElement | null;
    const container = document.querySelector('.header__container') as HTMLElement | null;
    const store = useStorageStore()

    if (title && container) {
        const rect = title.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const right = containerRect.right - rect.right - 20;
        const left = rect.left - containerRect.left + rect.width - 20;
        store.indentRight = right;
        store.indentLeft = left;
    }
}