<template>
  <section class="cart">
    <h1>Items in your cart({{ items.length }})</h1>
    <!-- Cart items -->
    <div v-for="item in items" :key="item.id">
      <div class="img-container"><img :src="item.image.desktop" alt="" /></div>
      <!-- <pre>{{ item }}</pre> -->
      <!-- <div>{{ item.name }}</div>
      <div>{{ item.price }}</div>
      <div>{{ item.quantity }}</div>
      <div>{{ item.total }}</div> -->
      <button @click="onRemove(item.id)">Remove</button>
    </div>
  </section>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps(["items"]);
const emit = defineEmits(["remove-item"]);

const onRemove = (itemId) => {
  emit("remove-item", itemId);
};
</script>




<style lang="scss" scoped>
section {
  .img-container {
    width: 200px;
  }
}
</style>