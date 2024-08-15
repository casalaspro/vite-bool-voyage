<template>
  <div class="container">
    <h1 class="mb-3">I tuoi Viaggi</h1>
    <div class="row gy-4">
      <div class="col-3" v-for="trip in trips">
        <div class="card">
          <div class="card-body">
            <h6 class="text-secondary">ID: {{ trip.id }}</h6>
            <h5>Nome: {{ trip.title }}</h5>
            <h5>Descrizione:</h5>
            <p>{{ trip.description }}</p>
            <h5>Motto:</h5>
            <p><em>{{ trip.motto }}</em></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      trips: [],
    }
  },
  methods: {
    fetchTrips(){
      // axios.get('http://localhost:8888/phpsqliteconnect/api.php')
      // .then((res)=>{
      //   console.log(res);
      // })
      axios({
        method: 'get',
        url: 'http://localhost:8888/phpsqliteconnect/api.php',
        data: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json', },
        crossdomain: true,
      })
      .then((res)=>{
        console.log(res);
        this.trips = res.data;
      })
    }
  },
  created() {
    this.fetchTrips();
  }
}
</script>

<style lang="scss" scoped>
// .container{
//   background-color: green;
//   color: white;
// }
.card{
  height: 100%;
}

</style>
