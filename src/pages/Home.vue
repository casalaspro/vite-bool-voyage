<template>
  <div class="container">
    <h1 class="mb-3">I tuoi Viaggi</h1>
    <div class="trips_wrap">
      <div class="row gy-4">
        <div class="col-3" v-for="trip in trips">
          <RouterLink :to="{ name: 'trip.show', params: {id: trip.id} }" class="card">
            <div class="card-body">
              <h6 class="text-secondary">ID: {{ trip.id }}</h6>
              <h5>Nome: {{ trip.title }}</h5>
              <h5>Descrizione:</h5>
              <p>{{ trip.description }}</p>
              <h5>Motto:</h5>
              <p><em>{{ trip.motto }}</em></p>
            </div>
          </RouterLink>
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-body">
              <div class="more-trips_btn d-flex justify-content-center align-items-center">
                <span>&plus;</span>
              </div>
            </div>
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

.more-trips_btn{
  height: 100%;
}

.trips_wrap{
  .row{
    .card{
      text-decoration: none;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.274);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    div:last-child{
      .card{
        background-color: rgba(227, 227, 227, 0.26);
      }
    }
  }
}

// #app > div > div:nth-child(2) > div > div:last-child > div{
//   background-color: rgb(113, 113, 113);
// }

</style>
