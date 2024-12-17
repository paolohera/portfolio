import { createRouter, createWebHistory } from 'vue-router'
import WarningPage from '../components/WarningPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/warning',
      name: 'warning',
      component: WarningPage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/AboutMe.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../components/Projects.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Contact.vue'),
    },
  ],
})

export default router
