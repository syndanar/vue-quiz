import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    name: "home",
    redirect: {name: "quiz-list"}
  },
  {
    path: "/quiz",
    component: () => import(/* webpackChunkName: "quiz-list" */ "../views/quiz/Index.vue"),
    children: [
      {
        path: "",
        name: "quiz-list",
        meta: {
          nav: {
            title: "Quiz list",
            icon: "mdi-format-list-bulleted"
          },
        },
        component: () => import(/* webpackChunkName: "quiz-list" */ "../views/quiz/List.vue"),
      },
      {
        path: "add",
        name: "quiz-add",
        meta: {
          nav: {
            title: "Quiz add",
            icon: "mdi-playlist-plus"
          },
        },
        component: () => import(/* webpackChunkName: "quiz-add" */ "../views/quiz/Add.vue"),
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
