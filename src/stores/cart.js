import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const showCartModal = ref(false);
  const cartItems = reactive([]);

  const orderTotal = computed(() =>
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const totalItemsInCart = computed(() =>
    cartItems.reduce((acc, item) => acc + item.qty, 0)
  );

  function add(dessert) {
    const dessertToAdd = dessert;
    const isInCart = cartItems.find((item) => item.id === dessertToAdd.id);
    dessertToAdd.qty += 1;
    if (!isInCart) {
      cartItems.push(dessertToAdd);
    }
  }

  function remove(dessert) {
    if (dessert.qty > 1) {
      dessert.qty -= 1;
      return;
    }
    dessert.qty = 0;
    const idx = cartItems.indexOf(dessert);
    cartItems.splice(idx, 1);
  }

  function $reset() {
    for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].qty = 0;
    }
    cartItems.splice(0, cartItems.length);
    showCartModal.value = false;
  }

  return {
    cartItems,
    showCartModal,
    totalItemsInCart,
    orderTotal,
    add,
    remove,
    $reset,
  };
});
