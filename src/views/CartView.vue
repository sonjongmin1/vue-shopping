<template>
  <div>
    <h2>CART</h2>
    <p class="empty" v-if="cart.length === 0">Your cart is empty.</p>
    <div class="cart-list" v-else>
      <div v-for="item in cart" :key="item.id" class="cart-list">
        <img :src="item.image" :alt="item.name" />
        <div class="pr-ct">
          <h3>{{ item.name }}</h3>
          <p>가격: {{ item.price.toLocaleString() }}원</p>
          <p>수량: {{ item.count }}</p>
          <button class="delBtn" @click="removeFromCart(item.id)">삭제</button>
        </div>
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
  margin-bottom: 30px;
}

div > .empty {
  margin-top: 200px;
  text-align: center;
  font-size: 60px;
  font-weight: bolder;
}

.cart-list {
  display: flex;
  justify-content: center;
}

.pr-ct {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 60px;
}

.cart-list > img {
  border-radius: 5px;
}

.delBtn {
  width: 100px;
  height: 30px;
  color: #242424;
  font-weight: bolder;
}

.delBtn:hover {
  cursor: pointer;
}
</style>
