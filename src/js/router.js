import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../pages/Home.vue'
import TripView from '../pages/AppTripShow.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes:[
    { path: '/', name:'home', component: HomeView },
    { path: '/trips:id', name:'trip.show', component: TripView, props: true },
  ]
})

export default router