<template>
  <div class="item">
    <h2>{{ category }}</h2>
    <div class="item_categories">
      <itemCard v-for="item in items" :key="item" :item="item" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import itemCard from "./itemCard.vue";
const items = ref();
const props = defineProps<{
  category: string;
}>();
onBeforeMount(async () => {
  await itemCat(props.category);
});
async function itemCat(event) {
  items.value = await fetch(
    `https://fakestoreapi.com/products/category/${event}?limit=5`
  ).then((res) => res.json());
  console.log(items.value);
}
</script>
<style lang="scss" scoped>
.item {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  .item_categories {
    display: flex;

    h2 {
    }
  }
}
</style>
