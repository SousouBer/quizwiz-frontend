import { getCategories, getLevels, getQuizzes } from "@/services/quiz";

export default {
  async fetchCategories(context) {
    const response = await getCategories();
    const categories = response.data.categories;

    context.commit("setCategories", { categories });
  },

  async fetchLevels(context) {
    const response = await getLevels();
    const levels = response.data.levels;

    context.commit("setLevels", { levels });
  },

  async fetchQuizzes(context) {
    const response = await getQuizzes();
    const quizzes = response.data.quizzes;

    context.commit("setQuizzes", { quizzes });
  },
};
