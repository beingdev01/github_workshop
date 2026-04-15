import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/workshop',
    component: () => import('@/layouts/WorkshopLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/workshop/day/1/day1-welcome',
      },
      {
        path: 'day/:day/:section',
        name: 'section',
        component: () => import('@/views/WorkshopPage.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/playground',
    name: 'playground',
    component: () => import('@/views/PlaygroundPage.vue'),
  },
  {
    path: '/cheatsheet',
    name: 'cheatsheet',
    component: () => import('@/views/CheatsheetPage.vue'),
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('@/views/ResourcesPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
