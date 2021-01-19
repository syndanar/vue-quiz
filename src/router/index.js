import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: () => import(/* webpackChunkName: "quiz-list" */ '../views/List.vue')
  },
  {
    path: '/about',
    name: 'Add',
    component: () => import(/* webpackChunkName: "add" */ '../views/Add.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
