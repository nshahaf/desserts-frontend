<template>
  <section class="app-container">
    <main>
      <h1>Desserts</h1>
      <DessertList :desserts="desserts" />
      <aside>
        <Cart />
      </aside>
    </main>
  </section>
  <CartModal v-if="store.showCartModal" />
</template>



<script setup>
import CartModal from "./components/CartModal.vue";
import Cart from "./components/Cart.vue";
import DessertList from "./components/DessertList.vue";

import { onMounted, ref } from "vue";
import { useCartStore } from "@/stores/cart.js";

//data source
const desserts = ref([]);
const store = useCartStore();

onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:3000/desserts`);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    desserts.value = data;
  } catch (error) {
    console.error(error);
  }
});
</script>


<style lang="scss" scoped>
.app-container {
  position: relative;
  background-color: $bgColor;
  height: 100%;
  padding: 90px 110px;
}

main {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto, 1fr;

  section.list {
    grid-column: 1;
    grid-row: 2;
  }

  aside {
    grid-column: 2;
    grid-row: 2;
  }
  h1 {
    grid-row: 1;
    grid-column: 1;
    font-size: 40px;
    font-family: redHat-bold;
    margin-block-end: 35px;
  }
}
</style>
