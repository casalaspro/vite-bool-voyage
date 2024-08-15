import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../pages/Home.vue'
import TripView from '../pages/Trip.vue'

const routes = [
  
]

const router = createRouter({
  history: createMemoryHistory(),
  routes:[
    { path: '/', name:'home', component: HomeView },
    { path: '/trip', name:'trip', component: TripView },
  ]
})

export default router