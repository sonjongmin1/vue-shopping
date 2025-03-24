<template>
  <AppHeader />
  <div>
    <router-view
      :cart="cart"
      :add-to-cart="addToCart"
      :remove-from-cart="removeFromCart"
    />
  </div>
  <AppFooter />
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

// 장바구니 상태
const cart = ref([]);

// 장바구니에 상품 추가 함수
const addToCart = (item) => {
  const itemIndex = cart.value.findIndex((cartItem) => cartItem.id === item.id);
  if (itemIndex === -1) {
    cart.value.push({ ...item, count: item.count });
  } else {
    cart.value[itemIndex].count += item.count;
  }
};

// 장바구니에서 상품 삭제 함수
const removeFromCart = (itemId) => {
  cart.value = cart.value.filter((item) => item.id !== itemId);
};
</script>
