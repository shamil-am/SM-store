<template>
  <v-col cols="3">
    <v-card class="mx-auto">
      <v-img height="200" :src="product.image.url" contain></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-spacer></v-spacer>
      <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
      <v-card-text>
        <div class="text-subtitle-1">{{ product.price.raw }} ₼</div>
        <div class="text-subtitle-1">
          <v-btn class="ma-2" text icon color="blue lighten-2">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </div>
      </v-card-text>
      <v-btn class="ma-2 btn-like" text icon color="gray lighten-2">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["product"],
};
</script>