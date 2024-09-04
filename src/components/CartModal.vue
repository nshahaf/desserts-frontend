<script setup>
import { useCartStore } from "@/stores/cart.js";
import IconOrderConfirmed from "@/assets/icons/icon-order-confirmed.vue";
const store = useCartStore();
</script>

<template>
  <section class="modal-container">
    <div class="modal">
      <div class="icon"><IconOrderConfirmed /></div>
      <h1>Order Confirmed</h1>
      <h4>We hope you enjoy your food!</h4>
      <div class="cart-list">
        <article
          class="item-preview"
          v-for="item in store.cartItems"
          :key="item.id"
        >
          <img :src="item.image.desktop" alt="Dessert Image" />
          <div class="details">
            <h2>{{ item.name }}</h2>
            <div class="pricing">
              <span class="quantity"> {{ item.qty }}x</span>
              <span class="price">@${{ item.price }}</span>
            </div>
          </div>
          <div class="total">${{ item.qty * item.price }}</div>
        </article>
        <div class="order-total">
          <span class="text">Order Total</span>
          <span class="num">${{ store.orderTotal }}</span>
        </div>
      </div>

      <button @click="store.$reset">Start New Order</button>
    </div>
  </section>
</template>


<style lang="scss" scoped>
section.modal-container {
  display: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background-color: rgba(128, 128, 128, 0.5);

  .modal {
    position: absolute;
    top: 45%;
    left: 50%;
    translate: -50% -50%;

    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    // width: 400px;
    height: auto;
    padding: 30px;
    background-color: white;

    h1 {
      font-family: redHat-bold;
      font-size: 30px;
    }

    h4 {
      color: grey;
    }
  }

  .cart-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: rgb(252, 248, 245);

    .item-preview {
      display: flex;
      align-items: center;
      gap: 20px;

      img {
        width: 80px;
      }

      .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        h2 {
          font-size: 18px;
        }
        .pricing {
          display: flex;
          gap: 10px;
          .quantity {
            color: darkred;
          }
          .price {
            color: grey;
          }
        }
      }
      .total {
        font-family: redHat-bold;
        margin-left: auto;
      }
    }
  }
  .order-total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .num {
      font-size: 22px;
      font-family: redHat-bold;
    }
  }

  button {
    padding-block: 14px;
    border: none;
    border-radius: 30px;
    background-color: rgb(200, 59, 14);
    color: whitesmoke;
    cursor: pointer;
  }
}
</style>