import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('isMenuChecked', () => {
  const isChecked = ref(false)
  const toogleMenu = computed(() => (isChecked.value = !isChecked.value))

  return { isChecked, toogleMenu }
})
