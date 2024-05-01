export default {
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

  setCurrentPage(state, payload) {
    state.currentPage = payload.currentPage;
  },

  paginateQuizzes(state, payload) {
    state.quizzes = [...state.quizzes, ...payload.quizzes];
  },

  setSimilarQuizzes(state, payload) {
    state.similarQuizzes = payload.similarQuizzes;
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

  setQuiz(state, payload) {
    state.quiz = payload.quiz;
  },

  setAnswer(state, answer) {
    const existingAnswerIndex = state.answers.findIndex(
      (item) => item.answerId === answer.answerId,
    );
    if (existingAnswerIndex === -1) {
      state.answers.push(answer);
    } else {
      state.answers.splice(existingAnswerIndex, 1);
    }
  },

  deselectAnswers(state, questionId) {
    state.answers = state.answers.filter(
      (item) => item.questionId !== questionId,
    );
  },

  setUser(state, payload) {
    state.user = payload.user;
  },

  setQuizResults(state, payload) {
    if (payload) {
      state.quizResults = payload.results;
    } else {
      state.quizResults = null;
    }
  },

  setInnerSearch(state, payload) {
    state.innerSearch = payload;
  },

  setContacts(state, payload) {
    state.contacts = payload;
  },
};
