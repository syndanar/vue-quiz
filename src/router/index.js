import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'quiz' },
  },
  {
    path: '/quiz',
    name: 'quiz',
    children: [
      {
        path: '',
        name: 'quiz',
        nav: {
          title: 'Quiz list',
          icon: 'mdi-format-list-bulleted'
        },
        component: () => import(/* webpackChunkName: "quiz" */ '../views/quiz/index.vue'),
      },
      {
        path: 'create',
        name: 'quiz-create',
        nav: {
          title: 'Quiz create',
          icon: 'mdi-playlist-plus'
        },
        component: () => import(/* webpackChunkName: "quiz-create" */ '../views/quiz/create.vue')
      },
      {
        path: 'update',
        name: 'quiz-update',
        component: () => import(/* webpackChunkName: "quiz-update" */ '../views/quiz/update.vue')
      },
      {
        path: 'delete',
        name: 'quiz-delete',
        component: () => import(/* webpackChunkName: "quiz-delete" */ '../views/quiz/delete.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
