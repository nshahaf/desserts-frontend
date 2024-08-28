<script setup>
import CartModal from "./components/CartModal.vue";
import Cart from "./components/Cart.vue";
import DessertList from "./components/DessertList.vue";
</script>

<template>
  <section class="app-container">
    <main>
      <h1>Desserts</h1>
      <DessertList />
    </main>

    <aside>
      <!-- <Cart /> -->
    </aside>
    <!-- <CartModal /> -->
  </section>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-container {
  background-color: $bgColor;
  height: 100vh;
  padding: 90px 110px;
}

main {
  h1 {
    font-size: 40px;
    font-family: redHat-bold;
    margin-block-end: 35px;
  }
}
</style>
