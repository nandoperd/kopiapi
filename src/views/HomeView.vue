<template>
  <div class="home">
    <MenuNavbar />
    <HeroView />
    <div class="container">

      <div class="row mt-4">
        <div class="col">
          <h2>
            Kopi
            <strong>Terbaik</strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/kopi" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuNavbar from '@/components/MenuNavbar.vue'
import HeroView from '@/components/HeroView.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from "axios"

export default {
  name: 'HomeView',
  components: {
    MenuNavbar,
    HeroView,
    CardProduct
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    setProducts(data) {
      this.products = data
    }
  },
  mounted() {
  // Make a request for a user with a given ID
  axios
    .get('http://localhost:3000/best-products') // url from json server
    .then((response) => this.setProducts(response.data))
    .catch((error) => console.log(error))
  }
}
</script>
