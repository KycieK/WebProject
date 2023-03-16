import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EventView from '@/views/EventView.vue'
import EventEditView from '@/views/EventEditView.vue'
import CalendarView from '@/views/CalendarView.vue'
import NewEventView from '../views/NewEventView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/new-event',
    name: 'new-event',
    component: NewEventView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/sportEvent/:id',
    name: 'sportEvent',
    component: EventView
  },
  {
    path: '/sportEvent-edit/:id',
    name: 'sportEvent-edit',
    component: EventEditView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
