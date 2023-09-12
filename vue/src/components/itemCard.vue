<template>
  <div class="item__card">
    <h4 class="item__title">{{ item.title }}</h4>
    <img class="item__img" :src="item.image" alt="" />
    <p>Price {{ item.price }}$</p>
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
  display: flex;
  width: 300px;
  height: 350px;
  margin: 20px 30px;
  flex-direction: column;
  justify-content: space-between;

  .item__title {
    margin: 10px;
  }
  .item__img {
    max-width: 150px;
    max-height: 200px;
  }
}
</style>
