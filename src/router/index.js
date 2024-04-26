import { createRouter, createWebHistory } from "vue-router";
import getters from "@/store/quiz/getters";

import LandingView from "@/views/LandingView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

import QuizzesView from "@/views/QuizzesView.vue";
import QuizView from "@/views/QuizView.vue";
import QuizQuestionsView from "@/views/QuizQuestionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      meta: { inauthenticated: true },
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      meta: { inauthenticated: true },

      component: LoginView,
    },
    {
      path: "/forgot-password",
      name: "forgotPassword",
      meta: { inauthenticated: true },

      component: ForgotPasswordView,
    },
    {
      path: "/reset-password",
      name: "resetPassword",
      meta: { inauthenticated: true },

      component: ResetPasswordView,
    },
    {
      path: "/landing",
      name: "landing",
      component: LandingView,
    },
    {
      path: "/quizzes",
      name: "quizzes",
      component: QuizzesView,
    },
    {
      path: "/quizzes/:id",
      name: "quiz",
      component: QuizView,
    },
    {
      path: "/quizzes/questions/:id",
      name: "quizQuestions",
      component: QuizQuestionsView,
    },
    {
      path: "/:notFound(.*)",
      name: "404NotFound",
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "quizzes" && to.meta.inauthenticated && getters.user)
    next({ name: "quizzes" });
  else next();
});

export default router;
