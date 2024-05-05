<template>
  <div class="container-fluid">
    <h1>SZÁLLÍTÓLEVÉL</h1>

    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Név</th>
        <th>Mennyiség</th>
        <th>SzavIdő</th>
        <th>Műveletek</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in szallit" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.invQty }}</td>
        <td>{{ item.consumable }}</td>
        <td>
          <button class="btn btn-danger" @click="szerkesztItem(item.id)">Mégsem!</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "KiadasView",
  data() {
    return {
      szallit: []
    }
  },

  methods: {
    getSzallit() {
      this.szallit = JSON.parse(localStorage.getItem('szallit')) ?? [];
    },
    szerkesztItem(id) {
      const index = this.szallit.findIndex(item => item.id === id);
      this.szallit.splice(index, 1);
      localStorage.setItem('szallit', JSON.stringify(this.szallit));
    }
  },
  mounted() {
    this.getSzallit();
  },

}
</script>

<style scoped>

</style>