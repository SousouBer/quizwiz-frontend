import {
  getCategories,
  getLevels,
  getQuizzes,
  getQuiz,
  sendAnswers,
} from "@/services/quiz";

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

    context.commit("setQuizzes", { quizzes });
  },

  async fetchQuiz(context, id) {
    const response = await getQuiz(id);
    const quiz = response.data.data;

    context.commit("setQuiz", { quiz });
  },

  async sendChosenAnswers(_, answers) {
    await sendAnswers(answers);
  },
};
