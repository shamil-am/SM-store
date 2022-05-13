<template>
  <v-col cols="12" md="6" offset-md="3" class="signup">
    <h2 class="text-center">Qeydiyyat</h2>
    <SocialButtons />
    <p class="or">və ya</p>
    <v-form v-model="valid" ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Ad</span>
            <v-text-field v-model="name" :rules="nameRules" required outlined placeholder="Adınızı daxil edin"></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Email</span>
            <v-text-field v-model="email" :rules="emailRules" required outlined placeholder="Emailinizi daxil edin"> </v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Şifrə</span>
            <v-text-field v-model="password" :rules="passwordRules" required outlined placeholder="Şifrə daxil edin"></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Şifrə təkrarı</span>
            <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules.concat(passwordConfirmationRule)" required outlined placeholder="Şifrə təkrarı"></v-text-field>
          </v-col>
          <v-btn block color="black" dark class="btn-signup" @click="submit"> Qeydiyyatdan keç </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-col>
</template>

<script>
import SocialButtons from "./SocialButtons.vue";

export default {
  components: {
    SocialButtons,
  },
  data: () => ({
    valid: false,
    name: "",
    nameRules: [(v) => !!v || "Ad boş buraxıla bilməz"],
    email: "",
    emailRules: [(v) => !!v || "E-mail buraxıla bilməz", (v) => /.+@.+/.test(v) || "Doğru email formatı daxil edin"],
    password: "",
    passwordRules: [
      (v) => !!v || "Şifrə daxil edin",
      (v) => v.length >= 8 || "8 simvoldan az ola bilmez",
      (v) => {
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (!v.split("").find((smyb) => numbers.includes(Number(smyb)))) {
          return "En azi 1 reqem daxil edin";
        } else {
          return true;
        }
      },
    ],
    confirmPassword: "",
    confirmPasswordRules: [(v) => !!v || "Tekara sifre daxil edin"],
  }),
  methods: {
    submit() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        alert("registered");
      }
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () => this.password === this.confirmPassword || "Şifrə eyni deyil";
    },
  },
};
</script>