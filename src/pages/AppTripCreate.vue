<template>
  <div class="container">
    <h3 class="section-title mb-3">TRIPS</h3>
    <div class="card">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="trip_title">Trip title</label>
            <input type="text" class="form-control" id="trip_title" aria-describedby="emailHelp" placeholder="Enter title">
            <small id="titleHelp" class="form-text text-muted">Enter a title for your trip.</small>
          </div>
          <div class="form-group">
            <label for="trip_description">Password</label>
            <input type="password" class="form-control" id="trip_description" placeholder="Password">
            <small id="descriptionHelp" class="form-text text-muted">Enter a description for your trip.</small>
          </div>

          <div class="accordion" id="accordionNations">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button @click="accordionToggle" class="accordion-button" :class="accordion == false ? 'collapsed' : ''" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Nations
                </button>
              </h2>
              <div id="nationsAccordion" class="accordion-collapse collapse" :class="accordion == true ? 'show' : ''"  aria-labelledby="headingOne"           data-bs-parent="#accordionNations">
                <div class="accordion-body">
                  <p>Choose the nations of your trip</p>
                  <div class="row">
                    <div v-for="nation in nations" class="form-check col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <input type="checkbox" name="alpha_3" class="form-check-input" :id="'alpha_3_'+nation.id">
                    <label class="form-check-label" :for="'alpha_3_'+nation.id">{{nation.name}}</label>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <p v-html="nations" class="error"></p> -->
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      accordion: false,
      nations : [],
    }
  },
  methods: {
    accordionToggle(){
      this.accordion = !this.accordion
    },
    fetchNations(){
      axios({
        method: 'get',
        url: 'http://localhost:8888/phpsqliteconnect/getNations.php',
        data: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json', },
        crossdomain: true,
      })
      .then((res)=>{
        console.log(res);
        this.nations = res.data;
      })
    }
    
  },
  created() {
    this.fetchNations();
  }
}
</script>

<style lang="scss" scoped>
  // .accordion-button:focus{
  //   outline-color: #F78FAD;
  // }
  .accordion-button{
    background: #f78fad6a;
    color: black;
  }

  .accordion-button.collapsed {
  background: white;
  color: #585C5F;
}

.accordion-button:focus {
    box-shadow: none;
    border-color: rgba(0,0,0,.125);
}
</style>