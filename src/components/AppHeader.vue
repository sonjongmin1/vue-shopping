<template>
  <div>
    <h1>VUE SHOP</h1>
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/product">PRODUCT</router-link>
      <router-link to="/cart">CART</router-link>
      <router-link to="/checkout">PAYMENT</router-link>
      <router-link to="/contact">Q&A</router-link>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
h1 {
  color: #fff;
  text-align: center;
  padding: 30px;
}

header {
  text-align: center;
}

nav {
  /* border: 1px solid black; */
  text-align: center;
  padding: 20px;
  font-weight: bolder;
}

/* router를 a태그로 알아듣는다. */
nav a {
  /* border: 1px solid black; */
  margin: 0 20px;
  text-decoration: none;
  padding: 10px;
  color: #fff;
}

nav a:hover {
  /* 남색은 정직과 신뢰를 상징하는 색상이다. */
  color: darkblue;
}
</style>
