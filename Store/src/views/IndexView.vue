<template>
  <div class="container-fluid">
    <h1 style="display: flex; justify-content: center; align-items: center; height: 100vh;">Kérlek válassz a fenti
      lehetőségek közül!</h1>
  </div>
</template>

<script>
import {http} from "@/utils/http.js";
import {RouterLink} from "vue-router";

export default {
  name: "IndexView",
  components: {
    http,
    RouterLink
  }
}
</script>

<style scoped>

</style>