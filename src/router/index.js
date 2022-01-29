import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        name: 'jobs',
        path: '/jobs',
        component: () => import('@/views/dashboard/Jobs/Jobs.vue'),
      },
      {
        path: '/users',
        name: 'user-list',
        component: () => import('@/views/dashboard/Users/UserList.vue'),
      },
      {
        path: '/process',
        name: 'process-list',
        component: () => import('@/views/dashboard/Users/UserList.vue'),
      },
      {
        path: '/jobs/create',
        name: 'createjob',
        component: () => import('@/views/dashboard/Jobs/createJob.vue'),
      },
      {
        path: '/jobs/edit',
        name: 'editjob',
        component: () => import('@/views/dashboard/Jobs/editJob.vue'),
      },
      {
        path: '/users/create',
        name: 'create-user',
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
