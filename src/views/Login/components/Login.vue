<template>
  <v-col cols="12" md="4" offset-md="4" class="login">
    <h2 class="text-center">Daxil ol</h2>
    <SocialButtons />
    <p class="or">və ya</p>
    <ValidationObserver v-slot="{ handleSubmit }">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12 pa-0">
              <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                <v-text-field v-model="email" :error-messages="errors" outlined placeholder="Emailinizi daxil edin"></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col cols="12 pa-0">
              <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                <v-text-field
                  v-model="password"
                  :error-messages="errors"
                  outlined
                  placeholder="Şifrə daxil edin"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  class="input-group--focused"
                  @click:append="show = !show"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <div class="forgot-password">
              <a href="http://" target="_blank">Şifrəmi unutdum</a>
            </div>
            <v-btn block color="black" dark @click="handleSubmit(submit)"> Daxil ol </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </ValidationObserver>
  </v-col>
</template>

<script>
import SocialButtons from "./SocialButtons.vue";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";

extend("email", {
  ...email,
  message: "Yalnis email formati",
});
extend("required", {
  ...required,
  message: "Zehmet olmasa qeyd edin",
});
export default {
  components: {
    SocialButtons,
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    email: "",
    show: false,
    password: "",
  }),
  methods: {
    async submit() {
      alert("submitting!");
    },
  },
};
</script>