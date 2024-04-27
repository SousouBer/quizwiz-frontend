import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/quiz/index.js";

import LandingView from "@/views/LandingView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ServerErrorView from "@/views/ServerErrorView.vue";

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
    {
      path: "/server-error",
      name: "500ServerError",
      component: ServerErrorView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(store.getters.userIsAuthenticated);
  if (
    to.name !== "quizzes" &&
    to.meta.inauthenticated &&
    store.getters.userIsAuthenticated
  ) {
    next({ name: "quizzes" });
  } else {
    next();
  }
});

export default router;
