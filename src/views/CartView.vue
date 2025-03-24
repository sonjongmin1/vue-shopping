<template>
  <div>
    <h2>CART</h2>
    <p class="empty" v-if="cart.length === 0">Your cart is empty.</p>
    <div class="cart-list" v-else>
      <div v-for="item in cart" :key="item.id" class="cart-list">
        <img :src="item.image" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <p>가격: {{ item.price.toLocaleString() }}만원</p>
        <p>수량: {{ item.count }}</p>
        <button @click="removeFromCart(item.id)">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cart: Array,
  removeFromCart: Function,
});
</script>

<style scoped>
* {
  color: #fff;
}

div > h2 {
  margin-top: 30px;
  text-align: center;
}

div > .empty {
  margin-top: 200px;
  text-align: center;
  font-size: 60px;
  font-weight: bolder;
}

.cart-list {
  border: 1px solid #fff;
}

.cart-list {
  display: flex;
  justify-content: center;
}
</style>
