<template>
  <v-app class="app">
    <Login />
  </v-app>
</template>

<script>
import Login from "./views/Login";
export default {
  components: {
    Login,
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
.app{
  font-family: 'Montserrat', sans-serif;
}
</style>