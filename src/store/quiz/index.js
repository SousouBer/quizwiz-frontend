import { createStore } from "vuex";

import quizGetters from "@/store/quiz/getters";
import quizMutations from "@/store/quiz/mutations";
import quizActions from "@/store/quiz/actions";

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

    currentPage: null,

    lastPage: null,

    similarQuizzes: [],

    quiz: [],

    answers: [],

    user: null,

    quizResults: null,

    innerSearch: "",

    contacts: null,
  },

  getters: quizGetters,
  mutations: quizMutations,
  actions: quizActions,
});

export default store;
