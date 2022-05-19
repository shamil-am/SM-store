<template>
  <div class="main-page">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../common/Navbar/Navbar.vue";
import Footer from "../common/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.main-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>