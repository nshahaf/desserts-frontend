<template>
  <section class="cart">
    <h1>Your cart({{ store.totalitemsInCart }})</h1>
    <div class="empty" v-if="store.cartItems.length === 0">
      <IconEmptyCart />
      <h4>Your added items will apear here</h4>
    </div>
    <!-- Cart items -->
    <div
      class="cart-item"
      v-else
      v-for="item in store.cartItems"
      :key="item.id"
    >
      <div class="info">
        <div class="name">{{ item.name }}</div>
        <div class="amount">
          <p class="qty">
            <span>{{ item.qty }}</span
            >x
          </p>
          <p class="price">@${{ item.price.toFixed(2) }}</p>
          <p class="total">${{ (item.qty * item.price).toFixed(2) }}</p>
        </div>
      </div>
      <IconRemoveItem @click="store.remove(item)"></IconRemoveItem>
    </div>
    <div v-if="store.cartItems.length > 0" class="order-total">
      <span class="text">order Total</span>
      <span class="num">${{ store.orderTotal }}</span>
    </div>
    <button @click="store.showCartModal = true">Confirm Order</button>
  </section>
</template>

<script setup>
import IconEmptyCart from "@/assets/icons/icon-empty-cart.vue";
import IconRemoveItem from "@/assets/icons/icon-remove-item.vue";
import { useCartStore } from "@/stores/cart.js";

const store = useCartStore();
</script>

<style lang="scss" scoped>
section {
  padding: 30px;
  background-color: white;
  h1 {
    color: darkred;
    font-size: 24px;
    font-family: redHat-bold;
    padding-block-end: 20px;
  }
  .img-container {
    width: 200px;
  }

  div.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-block: 25px;
    font-size: 14px;
    color: darkred;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: redHat-semibold;
    .info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .name {
      }
      .amount {
        display: flex;
        flex-direction: row;
        gap: 10px;
        .qty {
          color: darkRed;
        }
        .price {
          color: grey;
        }
        .total {
        }
      }
    }
  }
  .order-total {
    display: flex;
    justify-content: space-between;
    padding-block-start: 30px;
    align-items: center;

    .num {
      font-size: 25px;
      font-family: redHat-bold;
    }
  }
  button {
    margin-block-start: 10px;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    background-color: rgb(149, 44, 12);
    color: white;
    font-family: redHat-regular;
    cursor: pointer;
  }
}
</style>