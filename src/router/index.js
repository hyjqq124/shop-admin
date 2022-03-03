import { createRouter, createWebHashHistory } from 'vue-router'

export const Router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }]
})
