import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/Jobs/Jobs.vue'),
      },
      {
        path: '/create',
        name: 'create-job',
        component: () => import('@/views/dashboard/Jobs/CreateJob.vue'),
      },
      {
        path: 'users',
        name: 'user-list',
        component: () => import('@/views/dashboard/Users/UserList.vue'),
      },
      {
        path: '/users/create',
        name: 'create-job',
        component: () => import('@/views/dashboard/Users/CreateUser.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
})

export default router
