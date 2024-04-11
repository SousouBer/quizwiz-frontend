import { createStore } from "vuex";

import { getCategories } from "@/services/quiz";

const store = createStore({
  state: {
    categories: [],
  },

  getters: {
    categories(state) {
      return state.categories;
    },
  },

  mutations: {
    setCategories(state, payload) {
      state.categories = payload.categories;
    },
  },

  actions: {
    async fetchCategories(context) {
      const response = await getCategories();
      const categories = response.data.categories;

      context.commit("setCategories", { categories });
    },
  },
});

export default store;
