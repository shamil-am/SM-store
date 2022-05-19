<template>
  <Loader />
</template>


<script>
import Commerce from "@chec/commerce.js";
const commerce = new Commerce(process.env.VUE_APP_PUBLIC_KEY);
import Loader from "./Loader.vue";

export default {
  components: {
    Loader,
  },
  methods: {
    async checkUser() {
      let userKey = this.$route.params.key;
      try {
        let jwt = await commerce.customer.getToken(userKey);
        jwt && this.$router.push("/");
      } catch (error) {
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.checkUser();
  },
};
</script>