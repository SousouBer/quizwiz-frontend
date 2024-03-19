import { createRouter, createWebHistory } from "vue-router";

import LandingPageView from "@/views/LandingPageView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      component: RegisterView,
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/landing",
      component: LandingPageView,
    },
  ],
});

export default router;
