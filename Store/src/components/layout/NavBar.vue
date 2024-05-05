<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Kezdolap</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/bevet">Bevetelezes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/kiadas">AruKiadas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/keszlet">Keszletkezeles</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
import {RouterLink} from "vue-router";

export default {
  name: "NavBar",
  components: {
    RouterLink
  }
}
</script>

<style scoped>

</style>