import { defineStore } from 'pinia'

export const useStorageStore = defineStore('storage', {
  state: () => ({
    indentRight: 0,
    indentLeft: 0,
    preloadActive: true,
    isBrief: false
  }),
})