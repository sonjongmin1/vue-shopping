// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/product", component: ProductView },
  { path: "/cart", component: CartView },
  { path: "/checkout", component: CheckoutView },
  { path: "/contact", component: ContactView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
