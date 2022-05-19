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
          <v-btn icon> <v-icon>mdi-cart</v-icon> </v-btn>
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
    logOut() {
      this.setUser(null);
      this.$router.push({ name: "LoginPage" });
      alert("Cixis edildi.")
    },
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "user/isAuthenticated",
    }),
  },
};
</script>