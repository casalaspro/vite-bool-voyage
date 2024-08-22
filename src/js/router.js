import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../pages/Home.vue'
import TripView from '../pages/AppTripShow.vue'
import TripCreate from '../pages/AppTripCreate.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes:[
    { path: '/', name:'home', component: HomeView },
    { path: '/trips:id', name:'trip.show', component: TripView, props: true },
    { path: '/trips/create', name:'trip.create', component: TripCreate},

  ]
})

export default router