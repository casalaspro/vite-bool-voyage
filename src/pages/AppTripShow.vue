<template>
  <div class="container d-flex justify-content-center">
    <div class="wrap-card py-4">
      <h1 class="mb-4 text-center">{{trip.title}}</h1>
      <RouterLink class="router-link d-flex align-items-center" :to="{ name: 'home'}"><p><font-awesome-icon class="me-1" :icon="['fas', 'chevron-left']" />Torna ai Tuoi Viaggi</p></RouterLink>
    <!-- If there are errors i catch them inside a div -->
    <div v-html="errors"></div>

    <AppCard class="my_card" v-if="trip !== null" :content=trip />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppCard from '../components/AppCard.vue'

export default {
  props:{
    id: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      trip: [],
      errors: [],
    }
  },
  components:{
    AppCard
  },
  methods: {
    fetchTrip(tripId){
      axios({
        method: 'get',
        url: 'http://localhost:8888/phpsqliteconnect/getTrip.php',
        params: {id: tripId},
        data: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json', },
        crossdomain: true,
      })
      .then((res)=>{
        console.log('Ricerca by id', res);
        this.trip = res.data;
      }).catch((error)=>{
        this.errors = error.response;
      })
    }
  },
  mounted() {
    
    this.fetchTrip(this.id);
    
    
  }
}
</script>

<style lang="scss" scoped>
.my_card{
  width: 360px;
}
.router-link{
  text-decoration: none;
  color: currentColor;
}
</style>