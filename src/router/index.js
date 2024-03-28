import { createRouter, createWebHistory } from "vue-router";
import QuizzesView from "@/views/QuizzesView.vue";
import LandingPageView from "@/views/LandingPageView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";

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
      path: "/forgot-password",
      component: ForgotPasswordView,
    },
    {
      path: "/reset-password",
      component: ResetPasswordView,
    },
    {
      path: "/landing",
      component: LandingPageView,
    },
    {
      path: "/quizzes",
      name: "quizzes",
      component: QuizzesView,
    },
  ],
});

export default router;
