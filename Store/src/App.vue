<template>
  <nav-bar/>
  <router-view/>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import {RouterView} from "vue-router"; //Mert nézetek közt fog váltani
export default {
  components: {
    NavBar,
    RouterView
  }
}
</script>

<style scoped>

</style>
