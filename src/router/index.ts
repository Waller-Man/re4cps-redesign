import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import Research from '../pages/Research.vue'
import Tools from '../pages/Tools.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'research',
          name: 'research',
          component: Research,
        },
        {
          path: 'tools',
          name: 'tools',
          component: Tools,
        },
      ],
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
