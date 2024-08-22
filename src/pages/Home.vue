<template>
  <div class="container">
    <div class="trips_wrap">
      <h3 class="section-title mb-3">TRIPS</h3>
      <div class="row gy-4">
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <RouterLink :to="{ name: 'trip.create'}" class="card">
            <div class="card-body">
              <div class="more-trips_btn d-flex justify-content-center align-items-center">
                <span>&plus;</span>
              </div>
            </div>
          </RouterLink>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="trip in trips">
          <RouterLink :to="{ name: 'trip.show', params: {id: trip.id}}" class="card">
            <div class="card-body">
              <div class="d-flex justify-content-center mb-3">
                <h5 class="card-title text-center p-3">{{ trip.title }}</h5>
              </div>
              <h6 class="card-title_id text-secondary">ID: {{ trip.id }}</h6>
              <h5>Descrizione:</h5>
              <p>{{ trip.description }}</p>
              <h5>Motto:</h5>
              <p><em>{{ trip.motto }}</em></p>
            </div>
          </RouterLink>
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
        url: 'http://localhost:8888/phpsqliteconnect/getTrips.php',
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
      background-color: rgb(255, 255, 255);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      .card-body{
        .card-title{
          color: rgba(247,143,173,1);
          border-bottom: 1px solid rgba(247,143,173,1);
          display: inline-block;
        }
        .card-title_id{
          font-family: 'Josefin Sans';
          font-weight: 300;
        }
      }
    }
    div:last-child{
      .card{
        background-color: rgb(231, 231, 231);
      }
    }
  }
}

// #app > div > div:nth-child(2) > div > div:last-child > div{
//   background-color: rgb(113, 113, 113);
// }

</style>
