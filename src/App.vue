<template>
  <div class="container my-5">
    <AppHeader />
    <RouterView> </RouterView>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  created() {
    
  },
  components:{
    AppHeader,
    AppFooter

  }
}
</script>

<style lang="scss" scoped>

</style>