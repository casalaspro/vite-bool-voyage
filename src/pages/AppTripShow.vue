<template>
  <div class="container">
    <h1>Trip</h1>
    <h1>Numero {{ id }}</h1>
  </div>
</template>

<script>

export default {
  props:{
    id: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  created() {
    
  }
}
</script>

<style lang="scss" scoped></style>