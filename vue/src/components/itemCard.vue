<template>
  <p>item.title</p>
</template>
<script lang="ts" setup>
import { IItem } from "../models/Item.model";
const props = defineProps<{
  item: IItem;
}>();
</script>
