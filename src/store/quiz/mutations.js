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
};
