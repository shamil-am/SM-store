<template>
  <div>
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