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
import auth from "@/router/middleware/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { name: "landing" },
    },
    {
      path: "/register",
      name: "register",
      meta: { middleware: [auth] },
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      meta: { middleware: [auth] },

      component: LoginView,
    },
    {
      path: "/forgot-password",
      name: "forgotPassword",
      meta: { middleware: [auth] },

      component: ForgotPasswordView,
    },
    {
      path: "/reset-password",
      name: "resetPassword",
      meta: { middleware: [auth] },

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
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
  });
});

export default router;
