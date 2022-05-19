<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-btn color="pink" dark @click="$router.go(-1)"> Geri </v-btn>
      </v-col>
      <v-col cols="8">
        <h1 class="text-center" v-if="cart.length < 1">Səbətdə məhsul yoxdur.</h1>
        <v-simple-table v-else>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Məhsulun adı</th>
                <th class="text-left">Ədəd</th>
                <th class="text-left">Qiymət</th>
                <th class="text-left"></th>
                <th class="text-left"></th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in cart" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.price.raw * product.quantity }}</td>
                <td><v-btn color="primary" dark x-small @click="decreaseProductCount(product)"> - </v-btn></td>
                <td><v-btn color="pink" dark x-small @click="increaseProductCount(product)"> + </v-btn></td>
                <td><v-btn color="red" dark x-small @click="removeFromCart(product)"> X </v-btn></td>
              </tr>
              <tr>
                <td>
                  <h3>Yekun: {{ summary }}</h3>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="2">
        <v-btn color="green" dark> Ödəniş et </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      increaseProductCount: "cart/increaseProductCount",
      decreaseProductCount: "cart/decreaseProductCount",
      removeFromCart: "cart/removeFromCart",
    }),
  },
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    },
    summary() {
      return this.$store.state.cart.cart.reduce((acc, cur) => acc + cur.price.raw * cur.quantity, 0).toFixed(2);
    },
  },
};
</script>