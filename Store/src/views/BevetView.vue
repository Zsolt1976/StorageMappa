<template>
  <div class="container-fluid">
    <h1>Bevételezés</h1>

    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Név</th>
        <th>Egység</th>
        <th>Műveletek</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in atvett" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.egyseg }}</td>
        <td>
          <button class="btn btn-warning" @click="addToAtvett(item.id)">Elfogad</button>
        </td>
      </tr>
      </tbody>
    </table>
    <button class="btn btn-success">Készlethez adás</button>
  </div>
</template>

<script>
import {http} from "@/utils/http.js";
import {RouterLink} from "vue-router";

export default {
  name: "BevetView",
  data() {
    return {
      atvett: []
    }
  },
  components: {
    http,
    RouterLink,
  },
  methods: {
    addToAtvett(id) {
      const item = this.items.find(item => item.id === id);
      this.atvett.push(item);
      localStorage.setItem('atvett', JSON.stringify(this.atvett));
    }
  }
}
</script>

<style scoped>

</style>