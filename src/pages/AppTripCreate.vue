<template>
  <div class="container">
    <h3 class="section-title mb-3">TRIPS</h3>
    <div class="card">
      <div class="card-body">
        <form class="trip_form">
          <div class="form-group mb-3">
            <label for="trip_title">Trip title</label>
            <input type="text" class="form-control" id="trip_title" aria-describedby="Input for trip title" placeholder="Title">
            <small id="titleHelp" class="form-text text-muted">Enter a title for your trip.</small>
          </div>

          <div class="form-group mb-3">
            <label for="trip_description" class="form-label">Example textarea</label>
             <textarea class="form-control" id="trip_description" rows="3"></textarea>
             <small id="descriptionHelp" class="form-text text-muted">Enter a description for your trip.</small>
          </div>

          <div class="form-group mb-3">
            <label for="trip_motto">Motto</label>
            <input type="text" class="form-control" id="trip_motto" placeholder="Motto">
            <small id="mottoHelp" class="form-text text-muted">Enter a motto if you want.</small>
          </div>

          <div class="accordion mb-3" id="accordionNations">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button @click="accordionToggle" class="accordion-button" :class="accordion == false ? 'collapsed' : ''" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Nations
                </button>
              </h2>
              <div id="nationsAccordion" class="accordion-collapse collapse" :class="accordion == true ? 'show' : ''"  aria-labelledby="headingOne"           data-bs-parent="#accordionNations">
                <div class="accordion-body">
                  <div class="row">
                    <div v-for="nation in nations" class="form-check col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <input type="checkbox" name="alpha_3" class="form-check-input" :id="'alpha_3_'+nation.id">
                    <label class="form-check-label" :for="'alpha_3_'+nation.id">{{nation.name}}</label>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <small id="titleHelp" class="form-text text-muted">Choose at least one country for your trip.</small>
          </div>
          <!-- <p v-html="nations" class="error"></p> -->
          <button type="submit" class="btn btn_submit">Submit</button>
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
    },
    sendTrip(){
      let form = document.querySelector('.trip_form');
      form.preve
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

  .btn_submit{
    background-color: #f78fad;
  }

  .accordion-button.collapsed {
  background: white;
  color: #585C5F;
}

.accordion-button:focus {
    box-shadow: none;
    border-color: rgba(0,0,0,.125);
}

.nationHelp{
  color: #585c5f;
  border-bottom: 1px solid #585c5f2a;
  font-size: 14px;
}
</style>