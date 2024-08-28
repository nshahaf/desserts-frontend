<template>
  <section>
    <DessertPreview
      v-for="(dessert, index) in desserts"
      :key="index"
      :dessert="dessert"
    />
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import DessertPreview from "./DessertPreview.vue";

const desserts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/desserts`);
    desserts.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>




<style lang="scss" scoped>
section {
}
</style>
