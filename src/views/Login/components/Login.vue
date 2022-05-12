<template>
  <v-col cols="12" md="4" offset-md="4" class="login">
    <h2 class="text-center">Daxil ol</h2>
    <SocialButtons />
    <p class="or">və ya</p>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12 pa-0">
            <span for="">Email</span>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              required
              outlined
              placeholder="Emailinizi daxil edin"
            ></v-text-field>
          </v-col>
          <v-col cols="12 pa-0">
            <span for="">Şifrə</span>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              required
              outlined
              placeholder="Şifrə daxil edin"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              class="input-group--focused"
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
          <div class="forgot-password">
            <a href="http://" target="_blank">Şifrəmi unutdum</a>
          </div>
          <v-btn block color="black" dark> Daxil ol </v-btn>
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
  }),
};
</script>