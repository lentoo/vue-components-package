import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    path: '/notification',
    name: 'notification',
    component: () => import('./docs/notification.md')
  },
  {
    path: '*',
    name: '404',
    component: () => import('./docs/404.md')
  }
]

const router = new Router({
  routes
})

export default router