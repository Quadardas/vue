<template>
  <div class="item">
    <div class="item_categories">
      <h3>{{ category }}</h3>
      <div class="item__pop" v-for="(item, key) in items" :key="key">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
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
