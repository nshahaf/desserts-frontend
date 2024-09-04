<template>
  <section v-if="dessert" class="preview">
    <div class="img-container">
      <img :src="imgSrc" alt="Dessert Image" />
      <button @click="store.add(dessert)">
        <iconAddToCart /> <span>Add to Cart</span>
      </button>
    </div>
    <div class="dessert-info">
      <h3 class="name">{{ dessert.name }}</h3>
      <h3 class="category">{{ dessert.category }}</h3>
      <h3 class="price">
        $<span>{{ dessert.price }}</span>
      </h3>
    </div>
  </section>

  <section v-else>Loading...</section>
</template>


<script setup>
import iconAddToCart from "@/assets/icons/icon-add-to-cart.vue";
import { computed, defineProps } from "vue";
import { useCartStore } from "@/stores/cart.js";

const props = defineProps(["dessert"]);
const store = useCartStore();

// Computed property for image URL
const imgSrc = computed(() => {
  return props.dessert?.image?.desktop || "";
});
</script>

<style lang="scss" scoped>
section.preview {
  .img-container {
    position: relative;
    width: 250px;
    height: 240px;
    // background-image: url("@/assets/imgs/image-baklava-desktop.jpg");
    background-size: cover;
    border-radius: 10px;
    margin-block-end: 40px;

    button {
      position: absolute;
      bottom: 0px;
      left: 50%;
      translate: -50% 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      width: 160px;
      padding: 10px;

      border: 1px solid black;
      border-radius: 30px;
      background-color: white;
      color: black;
      font-size: 14px;
      font-family: redHat-semibold;
      cursor: pointer;
    }
  }

  .dessert-info {
    font-family: redHat-semibold;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .name {
      color: grey;
      font-size: 14px;
    }

    .category {
      font-size: 16px;
    }

    .price {
      font-size: 16px;
      color: darkred;
    }
  }
}
</style>