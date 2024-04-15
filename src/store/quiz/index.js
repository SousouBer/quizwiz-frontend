import { createStore } from "vuex";

import { getCategories, getLevels, getQuizzes } from "@/services/quiz";

const store = createStore({
  state: {
    selectedOptionsCount: 0,

    categories: [],
    levels: [],

    selectedCategories: [],
    selectedLevels: [],

    selectedSort: null,

    completedQuizzes: null,
    myQuizzes: null,

    quizzes: [],
  },

  getters: {
    categories(state) {
      return state.categories;
    },

    selectedCategories(state) {
      return state.selectedCategories;
    },

    levels(state) {
      return state.levels;
    },

    selectedLevels(state) {
      return state.selectedLevels;
    },

    selectedSort(state) {
      return state.selectedSort;
    },

    selectedOptionsCount(state) {
      return state.selectedOptionsCount;
    },

    completedQuizzes(state) {
      return state.completedQuizzes;
    },

    myQuizzes(state) {
      return state.myQuizzes;
    },

    quizzes(state) {
      return state.quizzes;
    },
  },

  mutations: {
    setCategories(state, payload) {
      state.categories = payload.categories;
    },

    setLevels(state, payload) {
      state.levels = payload.levels;
    },

    setSelectedLevels(state, payload) {
      state.selectedLevels = payload;
    },

    setSelectedCategories(state, payload) {
      state.selectedCategories = payload;
    },

    setSelectedOptionsCount(state, count) {
      state.selectedOptionsCount = count;
    },

    setSelectedSort(state, payload) {
      state.selectedSort = payload;
    },

    setMyQuizzes(state, payload) {
      if (payload) {
        state.myQuizzes = payload;
      }
      state.myQuizzes = !state.myQuizzes;
    },

    setCompletedQuizzes(state, payload) {
      if (payload) {
        state.completedQuizzes = payload;
      } else {
        state.completedQuizzes = !state.completedQuizzes;
      }
    },

    setQuizzes(state, payload) {
      state.quizzes = payload.quizzes;
    },

    toggleSelectedCategory(state, category_id) {
      const categories = state.selectedCategories;

      if (categories.includes(category_id)) {
        categories.splice(categories.indexOf(category_id), 1);
      } else {
        categories.push(category_id);
      }
    },

    toggleSelectedLevel(state, level_id) {
      const levels = state.selectedLevels;

      if (levels.includes(level_id)) {
        levels.splice(levels.indexOf(level_id), 1);
      } else {
        levels.push(level_id);
      }
    },

    clearValues(state) {
      state.selectedCategories = [];
      state.selectedLevels = [];
      state.selectedSort = null;
      (state.myQuizzes = null), (state.completedQuizzes = null);
    },
  },

  actions: {
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
  },
});

export default store;
