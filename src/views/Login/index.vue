<template>
  <div class="login-signup">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" offset-md="4">
          <div class="tab-buttons">
            <div class="login-btn" :class="activeTab === 'login' && 'active'" @click="setActiveTab('login')">Daxil ol</div>
            <div class="signup-btn" :class="activeTab === 'signup' && 'active'" @click="setActiveTab('signup')">Qeydiyyat</div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <component :is="activeTab"></component>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import "./index.scss";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";

export default {
  components: {
    Login,
    Signup,
  },
  data() {
    return {
      activeTab: "login",
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>
