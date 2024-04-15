<template>
  <TheHeader />
  <main class="relative pb-32 border-b">
    <FilterPanel />
    <div class="px-6 sm:px-24 grid md:grid-cols-3 gap-8 relative">
      <QuizCard
        v-for="quiz in quizzes"
        :key="quiz.id"
        :id="quiz.id"
        :title="quiz.title"
        :categories="quiz.categories"
        :difficultyLevel="quiz.difficulty_level"
        :time="quiz.time"
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

  mounted() {
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchLevels");
    this.$store.dispatch("fetchQuizzes");
  },
};
</script>
