<template>
  <div>
    <categoryFinder
      v-for="category in categories"
      :key="category"
      :category="category"
    />
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import type { IItem } from "../models/Item.model";
import categoryFinder from "../components/categoryFinder.vue";

const categories = ref();
const items = ref<Array<IItem>>();
async function fetchCategories() {
  categories.value = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());
}
async function categoryItem() {}
onBeforeMount(async () => {
  await fetchCategories();
});
</script>

<style lang="scss" scoped>
.item {
  margin-left: 10px;
}
a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.87);
}
</style>
