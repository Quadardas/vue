<template>
  <div class="item__card">
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
</template>
<script lang="ts" setup>
import { IItem } from "../models/Item.model";
const props = defineProps<{
  item: IItem;
}>();
</script>
<style lang="scss" scoped>
.item__card {
  width: 350px;
  margin: 40px 40px;
}
</style>
