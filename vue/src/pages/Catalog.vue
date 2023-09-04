<template>
  <div class="item">
    <div class="item_categories" v-for="category in categories" :key="key">
      {{ category }}
      <div class="item_price"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
const categories = ref();
async function fetchCategories() {
  categories.value = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());
}
async function CategoryItem() {}
onBeforeMount(async () => {
  await fetchCategories();
});
</script>

<style lang="scss" scoped>
.item {
  margin-left: 10px;
}
</style>
