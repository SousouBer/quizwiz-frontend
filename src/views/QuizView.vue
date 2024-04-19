<template>
  <TheHeader />
  <LinkBack class="px-4 sm:px-24 my-4 mb-2 sm:mb-12" />
  <div class="flex justify-between px-4 sm:px-24 my-3 sm:my-6">
    <div class="sm:mr-8">
      <div class="flex gap-8 border-b pb-16 mb-4">
        <div class="w-full sm:w-auto">
          <QuizWrapperCategory class="mb-4 sm:hidden" />
          <QuizInnerWrapperImage
            link="{{ selectedQuiz.image }}"
            class="sm:w-80 sm:hidden mt-4"
          />
          <h1 class="text-4xl font-bold leading-12 mb-4">
            {{ selectedQuiz.title }}
          </h1>
          <div class="flex gap-3">
            <QuizWrapperCategory
              v-for="category in selectedQuiz.categories"
              :key="category.id"
              :label="category.title"
              class="my-4 hidden sm:flex"
            />
          </div>
          <span class="font-semibold text-sm text-grayish-blue">{{
            selectedQuiz.description
          }}</span>

          <div
            class="flex gap-2 sm:gap-8 items-start justify-between sm:items-center flex-col sm:flex-row my-10"
          >
            <QuizInnerStatistic
              statistic="questions"
              :label="`${selectedQuiz.questions} questions`"
            />
            <QuizInnerStatistic
              statistic="points"
              :label="`${selectedQuiz.points} points`"
            />
            <QuizInnerStatistic
              statistic="count"
              :label="`${selectedQuiz.plays} plays`"
            />
            <QuizInnerStatistic
              statistic="time"
              :label="`${selectedQuiz.time}m`"
            />
          </div>
          <button
            class="bg-saturated-blue transition-colors duration-300 hover:bg-blue-500 px-32 text-white py-3 rounded-lg text-base font-semibold w-full sm:w-auto"
          >
            Start quizz
          </button>
        </div>
        <QuizInnerWrapperImage class="h-72 sm:w-80 hidden sm:block" />
      </div>
      <span class="font-bold text-lg">Instructions</span>
      <p class="mt-1">
        {{ selectedQuiz.instructions }}
      </p>
    </div>
    <div class="hidden sm:flex flex-col gap-6">
      <!-- <QuizCard class="border border-light-gray bg-gray-100 rounded-lg" /> -->
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheFooter from "@/components/shared/TheFooter.vue";
import TheHeader from "@/components/shared/TheHeader.vue";
import LinkBack from "@/components/shared/LinkBack.vue";
import QuizWrapperCategory from "@/components/quiz/QuizWrapperCategory.vue";
import QuizInnerStatistic from "@/components/quiz/QuizInnerStatistic.vue";
// import QuizCard from "@/components/quiz/QuizCard.vue";
import QuizInnerWrapperImage from "@/components/quiz/QuizInnerWrapperImage.vue";

export default {
  components: {
    TheFooter,
    LinkBack,
    TheHeader,
    QuizWrapperCategory,
    QuizInnerStatistic,
    // QuizCard,
    QuizInnerWrapperImage,
  },

  computed: {
    selectedQuiz() {
      return this.$store.getters.quiz;
    },
  },

  mounted() {
    const quizId = this.$route.params.id;

    this.$store.dispatch("fetchQuiz", quizId);
  },
};
</script>
