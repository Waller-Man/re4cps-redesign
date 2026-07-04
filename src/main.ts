import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import i18n from './locales'
import router from './router'
import './styles/global.css'

createApp(App).use(ArcoVue).use(router).use(i18n).mount('#app')
