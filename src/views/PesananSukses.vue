<template>
  <div class="pesanan-sukses">
    <MenuNavbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/otw.svg" width="300" />
          <h2><strong>Sukses!!</strong></h2>
          <h4>Pesanan Anda segera diantar <br> Silahkan Menunggu</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuNavbar from "@/components/MenuNavbar.vue";
export default {
  name: "PesananSukses",
  components: {
    MenuNavbar,
  },
};
</script>

<style scoped>
</style>