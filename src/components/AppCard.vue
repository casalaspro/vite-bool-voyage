<template>
  <!-- <div class="container"> -->
    <div class="card">
      <img class="card-img-top" width="200" :src="content.image ? content.image : dImg" alt="Card image cap">
      <div class="card-body">
        <div class="d-flex justify-content-center mb-3">
          <!-- <h5 class="card-title text-center p-3">{{ content }}</h5> -->
        </div>
        <h6 class="card-title_id text-secondary">ID: {{ content.id }}</h6>
        <h5>Descrizione:</h5>
        <p>{{ content.description }}</p>
        <h5>Motto:</h5>
        <p><em>{{ content.motto }}</em></p>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>

import defaultImg from '../assets/default_img@4x.png'

export default {
  data() {
    return {
      dImg: defaultImg
    }
  },
  props:{
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    
  },
  created() {
    
  }
}
</script>

<style lang="scss" scoped></style>