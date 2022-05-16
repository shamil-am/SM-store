<template>
  <Loader v-if="$store.state.loader.loaded" />
  <div class="home" v-else>
    <v-container py-0>
      <v-row>
        <v-col cols="12">
          <v-carousel v-model="model">
            <v-carousel-item>
              <img src="../../assets/home-carousel1.png" alt="" width="100%" />
            </v-carousel-item>
            <v-carousel-item>
              <img src="../../assets/home-carousel1.png" alt="" width="100%" />
            </v-carousel-item>
            <v-carousel-item>
              <img src="../../assets/home-carousel1.png" alt="" width="100%" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <section class="new-products">
        <p>Yeni gələnlər</p>
        <v-row> <SingleProduct v-for="product in newProducts" :key="product.id" :product="product" /> </v-row>
      </section>
      <section class="most-sold">
        <p>Ən çox satılanlar</p>
        <v-row> <SingleProduct v-for="product in mostSoldProducts" :key="product.id" :product="product" /> </v-row>
      </section>
      <section class="add">
        <v-row>
          <v-col cols="6">
            <img src="../../assets/add1.png" alt="img" />
          </v-col>
          <v-col cols="6">
            <img src="../../assets/add2.png" alt="img" />
          </v-col>
        </v-row>
      </section>
      <section class="most-liked">
        <p>Ən çox bəyənilənlər</p>
        <v-row> <SingleProduct v-for="product in mostLikedProducts" :key="product.id" :product="product" /> </v-row>
      </section>
      <section class="add">
        <v-row>
          <v-col cols="12">
            <img src="../../assets/add3.png" alt="img" />
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>
<script>
import ProductService from "../../api/products.service";
import SingleProduct from "./components/SingleProduct.vue";
import Loader from "../../common/Loader.vue";

import "./index.scss";
export default {
  components: {
    SingleProduct,
    Loader,
  },
  data: () => ({
    model: 0,
    newProducts: [],
    mostSoldProducts: [],
    mostLikedProducts: [],
  }),
  methods: {
    async getNewProducts() {
      let data = await ProductService.getNewProducts();
      this.newProducts = data;
    },
    async getMostSoldProducts() {
      let data = await ProductService.getMostSoldProducts();
      this.mostSoldProducts = data;
    },
    async getMostLikedProducts() {
      let data = await ProductService.getMostLikedProducts();
      this.mostLikedProducts = data;
    },
  },
  mounted() {
    this.$store.commit("loader/show");
    Promise.all([this.getNewProducts(), this.getMostSoldProducts(), this.getMostLikedProducts()]).then(() => {
      this.$store.commit("loader/hide");
    });
  },
};
</script>