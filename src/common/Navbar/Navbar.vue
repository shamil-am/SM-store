<template>
  <nav>
    <v-container>
      <v-row class="align-center">
        <v-col cols="2">
          <router-link to="/">
            <img src="../../assets/logo.svg" alt="" />
          </router-link>
        </v-col>
        <v-col cols="8">
          <v-text-field label="Məhsul axtarın" placeholder="Meselen, ayaqqabi veya parfum" prepend-icon="mdi-magnify"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn icon @click="goToAccount"> <v-icon>mdi-account</v-icon> </v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-badge color="pink" :content="cartLength">
                <v-btn icon color="red" dark v-bind="attrs" v-on="on">
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
              </v-badge>
            </template>
            <div v-if="cartLength > 1">
              <v-list >
                <v-list-item v-for="(item, index) in $store.state.cart.cart" :key="index">
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
              <div class="pa-4">
                <v-btn color="pink" dark @click="goToCart"> Səbətə get</v-btn>
              </div>
            </div>
          </v-menu>
          <v-btn icon v-if="isAuthenticated" @click="logOut"> <v-icon>mdi-logout</v-icon> </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <menu>
      <router-link to="/"> Yenİ </router-link>
      <router-link to="/"> BRENDLƏR </router-link>
      <router-link to="/"> endİrİmlər </router-link>
      <router-link to="/"> MAKİYAJ </router-link>
      <router-link to="/"> üz </router-link>
      <router-link to="/"> SAÇ </router-link>
      <router-link to="/"> bədən </router-link>
      <router-link to="/"> K-beauty </router-link>
      <router-link to="/"> fırçalar və aksessuarlar </router-link>
      <router-link to="/"> hədİyyəlİk dəstlər </router-link>
    </menu>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import "./navbar.scss";

export default {
  methods: {
    ...mapMutations({
      setUser: "user/setUser",
    }),
    goToAccount() {
      this.$router.push({ name: "AccountPage" });
    },
    goToCart(){
      this.$router.push({ name: "Cart" });

    },
    logOut() {
      this.setUser(null);
      this.$router.push({ name: "LoginPage" });
      alert("Cixis edildi.");
    },
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "user/isAuthenticated",
    }),
    cartLength() {
      return this.$store.state.cart.cart.length;
    },
  },
};
</script>