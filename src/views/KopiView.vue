<template>
  <div>
    <MenuNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>
            Menu
            <strong>Kopi</strong>
          </h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Kopi Favorit Anda .."
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="cariKopi"
            />

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
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
import MenuNavbar from "@/components/MenuNavbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "KopiView",
  components: {
    MenuNavbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    cariKopi() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products") // url from json server
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

  <style>
</style>
  