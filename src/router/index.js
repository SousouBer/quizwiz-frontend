import { createRouter, createWebHistory } from "vue-router";

import LandingPageView from "@/views/LandingPageView.vue";
import RegisterView from "@/views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      component: RegisterView,
    },
    {
      path: "/landing",
      component: LandingPageView,
    },
  ],
});

export default router;
