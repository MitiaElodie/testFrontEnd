import { createRouter, createWebHistory } from 'vue-router'
import DetailEvent from '../views/DetailEvent.vue'

const routes = [
  {
    path: '/event/:name',
    name: 'Event',
    component: DetailEvent
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
