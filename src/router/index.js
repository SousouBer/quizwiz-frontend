import { createRouter, createWebHistory } from "vue-router";
import QuizzesView from "@/views/QuizzesView.vue";
import LandingView from "@/views/LandingView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/forgot-password",
      name: "forgotPassword",
      component: ForgotPasswordView,
    },
    {
      path: "/reset-password",
      name: "resetPassword",
      component: ResetPasswordView,
    },
    {
      path: "/landing",
      component: LandingView,
    },
    {
      path: "/quizzes",
      name: "quizzes",
      component: QuizzesView,
    },
  ],
});

export default router;
