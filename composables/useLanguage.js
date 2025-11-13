import { ref } from 'vue'

const currentLanguage = ref('id')

export const useLanguage = () => {
  const setLanguage = (lang) => {
    currentLanguage.value = lang
  }

  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'id' ? 'en' : 'id'
  }

  const t = (translations) => {
    return translations[currentLanguage.value] || translations['id']
  }

  return {
    currentLanguage,
    setLanguage,
    toggleLanguage,
    t
  }
}
