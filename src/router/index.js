import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KopiView from '../views/KopiView.vue'
import KopiDetail from '../views/KopiDetail.vue'
import KeranjangView from '../views/KeranjangView.vue'
import MultipleUpload from '../views/MultipleUpload.vue'
import PesananSukses from '../views/PesananSukses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kopi',
    name: 'kopi',
    component: KopiView
  },
  {
    path: '/multiple',
    name: 'multiple',
    component: MultipleUpload
  },
  {
    path: '/kopi/:id',
    name: 'detail',
    component: KopiDetail
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component: KeranjangView
  },
  {
    path: '/pesanan-sukses',
    name: 'pesanan-sukses',
    component: PesananSukses
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
