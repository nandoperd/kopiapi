<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4 align-items-center">
        <div class="col-md-6">
          <div class="d-flex h-100 justify-content-center">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Kopi buat temen kerja,</strong>
                <br />Bisa pesan <i>online</i>
              </h2>
              <p>Ayo segera pilih dan pesan kopi favorit kamu!</p>
              <router-link class="btn btn-lg btn-success" to="/kopi">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/kopihero.svg" width="60%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4 align-items-center">
        <div class="col-md-6 mb-3 text-center">
          <img src="../assets/images/kopihero.svg" width="60%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100 justify-content-center align-items-center">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Kopi buat temen kerja,</strong>
                <br />Bisa pesan <i>online</i>
              </h2>
              <p>Ayo segera pilih dan pesan kopi favorit kamu!</p>
              <router-link class="btn btn-lg btn-success" to="/kopi">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'HeroView',
};
</script>
  
<style>
</style>
