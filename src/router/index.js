import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '@/views/TodosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todos',
      component: TodosView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // {
    //   path: '/testing',
    //   name: 'testing',
    //   component: () => import('@/views/TestingVue.vue')
    // },
  ],
})

export default router
