<template>
  <TheHeader />
  <main class="relative pb-32 border-b">
    <FilterPanel />
    <div class="px-6 sm:px-24 grid md:grid-cols-3 gap-8 relative">
      <QuizCard
        class="cursor-pointer"
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
      />
    </div>
    <QuizButtonLoadMore />
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import FilterPanel from "@/components/filter/FilterPanel.vue";
import QuizCard from "@/components/quiz/QuizCard.vue";
import QuizButtonLoadMore from "@/components/quiz/QuizButtonLoadMore.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    FilterPanel,
    QuizCard,
    QuizButtonLoadMore,
  },

  computed: {
    quizzes() {
      return this.$store.getters.quizzes;
    },
  },

  methods: {
    quizDetails(id) {
      this.$router.push({ name: "quiz", params: { id: id } });
    },
  },

  mounted() {
    // Fetch quizzes, levels, and categories only if quizzes' state is empty
    // to prevent frequent requests.
    const quizzes = this.$store.getters.quizzes;

    this.$store.dispatch("fetchUser");

    if (quizzes.length === 0) {
      this.$store.dispatch("fetchQuizzes", this.$route.query);
      this.$store.dispatch("fetchCategories");
      this.$store.dispatch("fetchLevels");
    }

    const urlCategories = this.$route.query.categories;
    const urlLevels = this.$route.query.levels;
    const urlSort = this.$route.query.sort;
    const urlMyQuizzes = this.$route.query.my_quizzes;
    const urlCompletedQuizzes = this.$route.query.completed_quizzes;

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

    if (urlMyQuizzes)
      this.$store.commit("setMyQuizzes", urlMyQuizzes === "true");

    if (urlCompletedQuizzes) {
      this.$store.commit("setCompletedQuizzes", urlCompletedQuizzes === "true");
    }
  },
};
</script>
