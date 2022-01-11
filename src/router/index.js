import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tasks from '../views/tasks.vue'
import currentsprint from '../views/currentsprint.vue'
import myperformance from '../views/myperformance.vue'
import reports from '../views/reports.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'tasks',
    component:tasks
  },

  {
    path: '/currentsprint',
    name: 'currentsprint',
    component:currentsprint
  },

  {
    path: '/myperformance',
    name: 'myperformance',
    component:myperformance
  },

  {
    path: '/reports',
    name: 'reports',
    component:reports
  }
]

const router = new VueRouter({
  routes
})

export default router
