import { createI18n } from 'vue-i18n'
import enUS from './en-US/index'
import zhCN from './zh-CN/index'

const i18n = createI18n({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
})

export default i18n
