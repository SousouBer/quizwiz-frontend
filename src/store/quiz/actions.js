import {
  getCategories,
  getLevels,
  getQuizzes,
  getSimilarQuizzes,
  getQuiz,
  sendAnswers,
  getContacts,
} from "@/services/quiz";

import { getUser } from "@/services/auth";

export default {
  async fetchCategories(context) {
    const response = await getCategories();
    const categories = response.data.data;

    context.commit("setCategories", { categories });
  },

  async fetchLevels(context) {
    const response = await getLevels();
    const levels = response.data.data;

    context.commit("setLevels", { levels });
  },

  async fetchQuizzes(context, queryParams) {
    const response = await getQuizzes(queryParams);
    const quizzes = response.data.data;

    const currentPage = response.data.meta.current_page;
    context.commit("setCurrentPage", { currentPage });
    context.commit("setQuizzes", { quizzes });
  },

  async paginateQuizzes(context, payload) {
    const { queryParams, paginate } = payload;

    const response = await getQuizzes(queryParams, paginate);
    const quizzes = response.data.data;

    const currentPage = response.data.meta.current_page;

    context.commit("setCurrentPage", { currentPage });
    context.commit("paginateQuizzes", { quizzes });
  },

  async fetchSimilarQuizzes(context, id) {
    const response = await getSimilarQuizzes(id);
    const similarQuizzes = response.data.data;

    context.commit("setSimilarQuizzes", { similarQuizzes });
  },

  async fetchQuiz(context, id) {
    const response = await getQuiz(id);
    const quiz = response.data.data;

    context.commit("setQuiz", { quiz });
  },

  async sendChosenAnswers(context, answers) {
    const response = await sendAnswers(answers);
    const results = response.data.data;

    context.commit("setQuizResults", { results });
  },

  async fetchUser(context) {
    const response = await getUser();
    const user = response.data;

    context.commit("setUser", { user });
  },

  async fetchContacts(context) {
    const response = await getContacts();
    const contacts = response.data.data;

    context.commit("setContacts", { contacts });
  },
};
