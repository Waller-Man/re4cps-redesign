import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Agents from '../pages/Agents.vue'
import Datasets from '../pages/Datasets.vue'
import Home from '../pages/Home.vue'
import Members from '../pages/Members.vue'
import Publications from '../pages/Publications.vue'
import ReResources from '../pages/ReResources.vue'
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
          path: 'publications',
          name: 'publications',
          component: Publications,
        },
        {
          path: 'agents',
          name: 'agents',
          component: Agents,
        },
        {
          path: 'tools',
          name: 'tools',
          component: Tools,
        },
        {
          path: 'members',
          name: 'members',
          component: Members,
        },
        {
          path: 're-resources',
          name: 're-resources',
          component: ReResources,
        },
        {
          path: 'datasets',
          name: 'datasets',
          component: Datasets,
        },
      ],
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
