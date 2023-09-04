<template>
  <Header />
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  width: 100%;
}
</style>
