<template>
  <section class="list">
    <DessertPreview
      v-for="(dessert, index) in desserts"
      :key="index"
      :dessert="dessert"
      @add-to-cart="handleAddToCart"
    />
  </section>
</template>

<script setup>
import DessertPreview from "./DessertPreview.vue";

const props = defineProps(["desserts"]);

const emit = defineEmits(["add-to-cart"]);

function handleAddToCart(dessert) {
  emit("add-to-cart", dessert);
}
</script>




<style lang="scss" scoped>
section.list {
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 30px 30px;
}
</style>
