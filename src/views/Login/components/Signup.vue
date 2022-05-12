<template>
  <v-col cols="12" md="6" offset-md="3" class="signup">
    <h2 class="text-center">Qeydiyyat</h2>
    <SocialButtons />
    <p class="or">və ya</p>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Ad</span>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              required
              outlined
              placeholder="Adınızı daxil edin"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Soyad</span>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              required
              outlined
              placeholder="Soyadınızı daxil edin"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Telefon</span>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              required
              outlined
              placeholder="Telefon"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0" md="6">
            <span for="">Email</span>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              required
              outlined
              placeholder="Emailinizi daxil edin"
            >
            </v-text-field>
          </v-col>
          <v-btn block color="black" dark class="btn-signup"> Qeydiyyatdan keç </v-btn>
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
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    show: false,
    password: "",
    passwordRules: [(v) => !!v || "Şifrə daxil edin"],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
};
</script>