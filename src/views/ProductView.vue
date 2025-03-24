<template>
  <div class="outBox">
    <h2>PRODUCT LIST</h2>
    <div class="p1">
      <div v-for="item in lists" :key="item.id" class="listbox">
        <div>
          <img :src="item.image" :alt="item.name" class="listImg" />
        </div>
        <div>
          <h3>{{ item.name }}</h3>
          <p>삼성 갤럭시북3 Go NT345XPA-K14A 가성비 사무용 노트북</p>
          <!-- 수량 선택 -->
          <div class="ct-pr">
            <div class="countBox">
              <button @click.stop="mcount(item)">-</button>
              <span>{{ item.count }}</span>
              <button @click.stop="acount(item)">+</button>
            </div>
            <p>{{ getTotalPrice(item) }}원</p>
            <!-- 금액 계산 -->
          </div>

          <!-- 장바구니 버튼 (항상 하단에 위치) -->
          <div class="cartBox">
            <button class="cartbtn" @click.stop="addToCart(item)">
              장바구니 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import laptopImage from "../assets/image/note.webp";
import phoneImage from "../assets/image/ph.webp";
import headphoneImage from "../assets/image/re.webp";

// 부모 컴포넌트에서 `addToCart` 함수 받아오기
defineProps(["addToCart"]);

// 상품 데이터

const getTotalPrice = (item) => {
  return (item.price * item.count).toLocaleString(); // 수량 * 가격
};

const lists = ref([
  {
    id: 1,
    name: "노트북",
    price: 1200000,
    image: laptopImage,
    count: 1,
  },
  {
    id: 2,
    name: "스마트폰",
    price: 800000,
    image: phoneImage,
    count: 1,
  },
  {
    id: 3,
    name: "헤드폰",
    price: 150000,
    image: headphoneImage,
    count: 1,
  },
]);

const mcount = (item) => {
  item.count > 1 && item.count--;
};

const acount = (item) => {
  item.count++;
};
</script>

<style scoped>
* {
  color: #fff;
}

button {
  width: 30px;
  height: 30px;
  color: #242424;
}

.outBox {
  padding: 40px;
}

h2 {
  color: #fff;
  margin-bottom: 40px;
}

.listbox {
  height: 400px;
  display: flex;
  margin-bottom: 20px;
}

.listbox > div:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.listbox > div:nth-child(2) {
  padding: 20px;
  width: 50%;
}

.listbox > div:nth-child(2) > h3 {
  font-size: 30px;
  margin-bottom: 20px;
}

.listbox > div:nth-child(2) > p {
  font-size: 20px;
  margin-bottom: 10px;
}

.ct-pr {
  margin-top: 170px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.ct-pr p {
  font-size: 30px;
}

.countBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  background-color: #fff;
  border-radius: 5px;
}

.countBox button {
  border: none;
  background-color: #fff;
  border-radius: 5px;
  font-size: 20px;
}

.countBox button:hover {
  cursor: pointer;
}

.countBox span {
  color: #242424;
}

.cartbtn {
  width: 150px;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

.cartbtn:hover {
  cursor: pointer;
}

.cartBox {
  display: flex;
  justify-content: flex-end;
}

.listImg {
  border-radius: 5px;
}
</style>
