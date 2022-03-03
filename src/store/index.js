import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 1
    }
  },
  getters: {

  },
  actions: {
    addCount () {
      this.count++
    }
  }
})
