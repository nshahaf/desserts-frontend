<template>
  <section class="app-container">
    <main>
      <h1>Desserts</h1>
      <DessertList :desserts="desserts" @add-to-cart="handleAddToCart" />
      <aside>
        <Cart :items="cartItems" @remove-item="handleRemove" />
      </aside>
    </main>

    <!-- <CartModal /> -->
  </section>
</template>

<script setup>
import CartModal from "./components/CartModal.vue";
import Cart from "./components/Cart.vue";
import DessertList from "./components/DessertList.vue";

import axios from "axios";
import { onMounted, ref } from "vue";

//data source
const desserts = ref([]);
const showCartModal = ref(false);
const cartItems = ref([]);

//functions

function handleAddToCart(dessert) {
  const dessertToAdd = { ...dessert };
  dessertToAdd.id = makeRandomId();
  cartItems.value.push(dessertToAdd);
}

function handleRemove(dessertId) {
  console.log("remove");
  cartItems.value = cartItems.value.filter((item) => item.id !== dessertId);
}

function makeRandomId() {
  return Math.floor(Math.random() * 10000000);
}

//lifecycle hooks
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
.app-container {
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
