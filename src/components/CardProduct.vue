<template>
  <div class="card shadow card-product">
    <img
      :src="'/assets/images/' + product.gambar"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga : {{ formatRupiah(product.harga) }}</p>
      <router-link class="btn btn-success" :to="'/kopi/' + product.id"
        ><b-icon-cart></b-icon-cart> Pesan</router-link
      >
    </div>
  </div>
</template>
  
<script>
export default {
  name: "CardProduct",
  props: ["product"],
  methods: {
    formatRupiah(number) {
            if (typeof number !== 'number') {
                return 'Rp. 0';
            }
            return `Rp. ${number.toLocaleString('id-ID')}`;
        }
  }
};
</script>
  
  <style>
</style>