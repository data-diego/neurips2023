import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {
  const test = ref({})
  return{
    test,
    
  }
})