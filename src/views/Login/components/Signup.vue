<template>
  <v-col cols="12" md="6" offset-md="3" class="signup">
    <h2 class="text-center">Qeydiyyat</h2>
    <SocialButtons />
    <p class="or">və ya</p>
    <ValidationObserver v-slot="{ handleSubmit }">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" class="py-0" md="6">
              <span for="">Ad</span>
              <ValidationProvider name="ad" rules="required" v-slot="{ errors, valid }">
                <v-text-field
                  v-model="user.name"
                  outlined
                  placeholder="Adınızı daxil edin"
                  :error-messages="errors"
                  :success="valid"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" class="py-0" md="6">
              <span for="">Soyad</span>
              <ValidationProvider name="soyad" rules="required" v-slot="{ errors, valid }">
                <v-text-field
                  v-model="user.surname"
                  outlined
                  placeholder="Soyadınızı daxil edin"
                  :error-messages="errors"
                  :success="valid"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" class="py-0" md="6">
              <span for="">Telefon</span>
              <ValidationProvider name="əlaqə nömrəsi" rules="required" v-slot="{ errors, valid }">
                <v-text-field
                  v-model="user.phone"
                  outlined
                  placeholder="Telefon nömrəsi daxil edin"
                  :error-messages="errors"
                  :success="valid"
                  type="number"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" class="py-0" md="6">
              <span for="">Email</span>
              <ValidationProvider name="email" rules="required|email" v-slot="{ errors, valid }">
                <v-text-field v-model="user.email" outlined placeholder="Emailinizi daxil edin" :error-messages="errors" :success="valid">
                </v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" class="py-0" md="6">
              <span for="">Şifrə</span>
              <ValidationProvider name="sifrə" rules="required|min:8|password" v-slot="{ errors, valid }" vid="firstPass">
                <v-text-field
                  v-model="user.password"
                  outlined
                  placeholder="Şifrə daxil edin"
                  :error-messages="errors"
                  :success="valid"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" class="py-0" md="6">
              <span for="">Şifrə təkrarı</span>
              <ValidationProvider
                name="tekrar sifrə"
                :rules="{ required: true, confirmPassword: { otherValue: '@firstPass' } }"
                v-slot="{ errors, valid }"
              >
                <v-text-field
                  v-model="user.confirmPassword"
                  outlined
                  placeholder="Şifrə təkrarı"
                  :error-messages="errors"
                  :success="valid"
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-btn block color="black" dark class="btn-signup" @click="handleSubmit(submit)"> Qeydiyyatdan keç </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </ValidationObserver>
  </v-col>
</template>

<script>
import SocialButtons from "./SocialButtons.vue";
import CustomerService from "../../../api/customer.service";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import alertify from "alertifyjs";
alertify.set("notifier", "position", "top-right");

export default {
  components: {
    SocialButtons,
    ValidationProvider,
    ValidationObserver,
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
  }),
  methods: {
    async submit() {
      let response = await CustomerService.addCustomer(this.user);
      response?.status === 201
        ? alertify.success("Qeydiyyat uğurlu oldu!")
        : alertify.alert().set({ transition: "zoom", message: "Xəta baş verdi!" }).show();
    },
  },
};
</script>