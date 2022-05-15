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
            <v-text-field v-model="user.name" :rules="nameRules" required outlined placeholder="Adınızı daxil edin"></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Soyad</span>
            <v-text-field v-model="user.surname" :rules="surnameRules" required outlined placeholder="Soyadınızı daxil edin"></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Telefon</span>
            <v-text-field v-model="user.phone" required outlined placeholder="Telefon nömrəsi daxil edin"></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Email</span>
            <v-text-field v-model="user.email" :rules="emailRules" required outlined placeholder="Emailinizi daxil edin"> </v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Şifrə</span>
            <v-text-field v-model="user.password" :rules="passwordRules" required outlined placeholder="Şifrə daxil edin"></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Şifrə təkrarı</span>
            <v-text-field v-model="user.confirmPassword" :rules="confirmPasswordRules.concat(passwordConfirmationRule)" required outlined placeholder="Şifrə təkrarı"></v-text-field>
          </v-col>
          <v-btn block color="black" dark class="btn-signup" @click="submit"> Qeydiyyatdan keç </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-col>
</template>

<script>
import SocialButtons from "./SocialButtons.vue";
import CustomerService from "../../../api/customer.service";

export default {
  components: {
    SocialButtons,
  },
  data: () => ({
    user: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    valid: false,
    nameRules: [(v) => !!v || "Ad boş buraxıla bilməz"],
    surnameRules: [(v) => !!v || "Soyad boş buraxıla bilməz"],
    emailRules: [(v) => !!v || "E-mail buraxıla bilməz", (v) => /.+@.+/.test(v) || "Doğru email formatı daxil edin"],
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
    confirmPasswordRules: [(v) => !!v || "Tekara sifre daxil edin"],
  }),
  methods: {
    async submit() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        let response = await CustomerService.addCustomer(this.user);
        response?.status === 201 ? alert("registered") : alert("Error occured");
      }
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () => this.user.password === this.user.confirmPassword || "Şifrə eyni deyil";
    },
  },
};
</script>