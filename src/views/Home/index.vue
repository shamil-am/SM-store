<template>
  <div class="home">
    <v-container py-0>
      <v-row>
        <v-col cols="12">
          <v-carousel v-model="model">
            <v-carousel-item>
              <img src="../../assets/home-carousel1.png" alt="" />
            </v-carousel-item>
            <v-carousel-item>
              <img src="../../assets/home-carousel1.png" alt="" />
            </v-carousel-item>
            <v-carousel-item>
              <img src="../../assets/home-carousel1.png" alt="" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row> <SingleProduct v-for="product in newProducts" :key="product.id" :product="product"/> </v-row>
    </v-container>
  </div>
</template>
<script>
import ProductService from "../../api/products.service";
import SingleProduct from "./components/SingleProduct.vue";
export default {
  components: {
    SingleProduct,
  },
  data: () => ({
    model: 0,
    newProducts: [],
  }),
  methods: {
    async getNewProducts() {
      let data = await ProductService.getNewProducts();
      this.newProducts = data;
      console.log(this.newProducts);
    },
  },
  mounted() {
    this.getNewProducts();
  },
};
</script>