<template>
  <div class="container-fluid">
    <h1>Készletek!</h1>
    <div>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Id</th>
          <th>TermékNév</th>
          <th>MennyEg</th>
          <th>Egyseg</th>
          <th>Típus_Id</th>
          <th>Készl_Menny</th>
          <th>Egyeb</th>
          <th>Gyártó_Id</th>
          <th>SzavIdő</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity_unit }}</td>
          <td>{{ item.unit }}</td>
          <td>{{ item.type_id }}</td>
          <td>{{ item.invQty }}</td>
          <td>{{ item.other }}</td>
          <td>{{ item.manufacturer_id }}</td>
          <td>{{ item.consumable }}</td>
          <td>
            <button class="btn btn-warning" @click="openModal(item)">Szerkesztés</button>
          </td>
          <td>
            <button class="btn btn-success" @add-to-szallit="addToSzallit">Szállítani</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {http} from "@/utils/http.js";
import {RouterLink} from "vue-router";
import IndexView from "@/views/IndexView.vue";

export default {
  name: "KeszletView",

  data() {
    return {
      szallit: [],
      items: [], // Itt tároljuk majd az adatbázisból kapott elemeket
      selectedProduct: "",
      szallitasiMennyiseg: ""
    };
  },

  components: {
    http,
    RouterLink,
    IndexView
  },

  methods: {
    async getData() {
      try {
        const response = await http.get('/api/products');
        console.log('Kapott adatok:', response.data);
        this.items = response.data.data;
      } catch (error) {
        console.error("Hiba történt a készletek lekérdezése közben:", error);
      }
    },

    openModal(item) {
      this.selectedProduct = item;
      $('#szallitasModal').modal('show');
    },

    getSzallit() {
      this.szallit = JSON.parse(localStorage.getItem('szallit')) ?? [];
    },
    addToSzallit(id) {
      const item = this.items.find(item => item.id === id);
      this.szallit.push(item);
      localStorage.setItem('szallit', JSON.stringify(this.szallit));
    }
  },
  mounted() {
    // Itt hívjuk meg az API-t, hogy lekérjük az adatokat az adatbázisból
    this.getData();
    this.getSzallit();
  }
}
</script>

<style scoped>

</style>