<template>
  <div class="loader">
    <v-progress-circular :size="70" :width="7" color="pink lighten-1" indeterminate></v-progress-circular>
  </div>
</template>


<style scoped>
.loader {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>