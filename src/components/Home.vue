<template>
  <div class="container">
    <h1 class="mb-3">I tuoi Viaggi</h1>
    <div class="card">
      <div class="card-body">
        This is some text within a card body.
        <div class="row">
          <div class="col-3">
            <h4>Nome:</h4>
            <h4>Destinazione:</h4>
            <h4>Descrizione:</h4>
            <h4>Motto:</h4>
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
      })
    }
  },
  created() {
    this.fetchTrips();
  }
}
</script>

<style lang="scss" scoped></style>
