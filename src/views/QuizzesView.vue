<template>
  <TheHeader route="quizzes" />
  <main class="relative pb-32">
    <FilterPanel />
    <TheLoader v-if="!quizzes.length" />
    <div class="px-6 sm:px-24 grid md:grid-cols-3 gap-8 relative">
      <QuizCard
        class="cursor-pointer shadow-xl"
        v-for="quiz in quizzes"
        @click="quizDetails(quiz.id)"
        :key="quiz.id"
        :id="quiz.id"
        :title="quiz.title"
        :categories="quiz.categories"
        :difficultyLevel="quiz.difficulty_level"
        :time="quiz.time"
        :plays="quiz.plays"
        :points="quiz.points"
        :image="quiz.image"
        :results="quiz.results"
      />
    </div>
    <QuizButtonLoadMore v-if="!showLoadMoreButton" @click="loadMoreQuizzes" />
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import FilterPanel from "@/components/filter/FilterPanel.vue";
import QuizCard from "@/components/quiz/QuizCard.vue";
import QuizButtonLoadMore from "@/components/quiz/QuizButtonLoadMore.vue";
import TheLoader from "@/components/shared/TheLoader.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    FilterPanel,
    QuizCard,
    QuizButtonLoadMore,
    TheLoader,
  },

  computed: {
    quizzes() {
      return this.$store.getters.quizzes;
    },

    showLoadMoreButton() {
      const lastPage = this.$store.getters.lastPage;
      const currentPage = this.$store.getters.currentPage;

      console.log(lastPage, currentPage);
      return lastPage === currentPage;
    },
  },

  methods: {
    quizDetails(id) {
      this.$router.push({ name: "quiz", params: { id: id } });
    },

    loadMoreQuizzes() {
      const currentPage = this.$store.getters.currentPage;

      this.$store.dispatch("paginateQuizzes", {
        queryParams: this.$route.query,
        paginate: currentPage + 1,
      });
    },

    checkQueryParams() {
      const queries = this.$route.query;

      let selectedOptionsCount = Object.keys(this.$route.query).length;

      if (queries.categories) {
        selectedOptionsCount += queries.categories.split(",").length - 1;
      }

      if (queries.levels) {
        selectedOptionsCount += queries.levels.split(",").length - 1;
      }

      this.$store.commit("setSelectedOptionsCount", selectedOptionsCount);
    },
  },

  mounted() {
    this.checkQueryParams();
    const quizzes = this.$store.getters.quizzes;

    this.$store.dispatch("fetchQuizzes", this.$route.query);
    if (quizzes.length === 0) {
      this.$store.dispatch("fetchCategories");
      this.$store.dispatch("fetchLevels");
    }

    const urlCategories = this.$route.query.categories;
    const urlLevels = this.$route.query.levels;
    const urlSort = this.$route.query.sort;
    const urlMyQuizzes = this.$route.query.my_quizzes;
    const urlCompletedQuizzes = this.$route.query.not_completed_quizzes;

    if (urlCategories) {
      const categoryIds = urlCategories.split(",").map((id) => parseInt(id));
      this.$store.commit("setSelectedCategories", categoryIds);
    }
    if (urlLevels) {
      const levelIds = urlLevels.split(",").map((id) => parseInt(id));
      this.$store.commit("setSelectedLevels", levelIds);
    }

    if (urlSort) {
      this.$store.commit("setSelectedSort", urlSort);
    }

    if (urlMyQuizzes) this.$store.commit("setMyQuizzes", urlMyQuizzes === true);

    if (urlCompletedQuizzes) {
      this.$store.commit("setCompletedQuizzes", urlCompletedQuizzes === true);
    }
  },

  watch: {
    "$route.query": {
      handler: "checkQueryParams",
      immediate: true,
      deep: true,
    },
  },
};
</script>
