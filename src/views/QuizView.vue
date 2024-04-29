<template>
  <TheHeader />
  <LinkBack class="px-4 sm:px-24 my-4 mb-2 sm:mb-12" />
  <div class="flex justify-between px-4 sm:px-24 my-3 sm:my-6">
    <div class="sm:mr-14">
      <div class="flex gap-8 border-b pb-16 mb-4">
        <div class="w-full sm:w-auto">
          <div class="flex gap-x-8 gap-y-4 my-4 flex-wrap">
            <QuizWrapperCategory
              v-for="(category, index) in selectedQuiz.categories"
              :key="category.id"
              :label="category.title"
              :lastItem="index === selectedQuiz.categories.length - 1"
              class="sm:hidden"
            />
          </div>

          <h1 class="text-4xl font-bold leading-12 mb-4">
            {{ selectedQuiz.title }}
          </h1>

          <div class="flex gap-x-8 gap-y-2 sm:my-4 flex-wrap">
            <QuizWrapperCategory
              v-for="(category, index) in selectedQuiz.categories"
              :key="category.id"
              :label="category.title"
              :lastItem="index === selectedQuiz.categories.length - 1"
              class="my-4 hidden sm:flex"
            />
          </div>
          <span class="font-semibold text-sm text-grayish-blue">{{
            selectedQuiz.description
          }}</span>
          <QuizInnerWrapperImage
            :link="selectedQuiz.image"
            class="sm:w-80 sm:hidden mt-4"
          />

          <div
            class="flex gap-2 sm:gap-8 items-start sm:items-center flex-col sm:flex-row my-10 w-full"
          >
            <QuizInnerStatistic
              class="w-full"
              statistic="questions"
              :label="`${selectedQuiz.questions} questions`"
              :notLastItem="false"
            />
            <QuizInnerStatistic
              class="w-full"
              statistic="points"
              :label="`${selectedQuiz.points} points`"
            />
            <QuizInnerStatistic
              class="w-full"
              statistic="count"
              :label="`${selectedQuiz.plays} plays`"
            />
            <QuizInnerStatistic
              class="w-full"
              statistic="time"
              :label="`${selectedQuiz.time}m`"
            />
          </div>
          <button
            @click="startQuiz"
            v-if="!selectedQuiz.results"
            class="bg-saturated-blue transition-colors duration-300 hover:bg-blue-500 px-32 text-white py-3 rounded-lg text-base font-semibold w-full sm:w-auto"
          >
            Start quizz
          </button>
          <span v-else class="font-semibold text-gray-600"
            >You have already completed the quiz.</span
          >
        </div>
        <QuizInnerWrapperImage
          :link="selectedQuiz.image"
          class="h-72 sm:w-80 hidden sm:block"
        />
      </div>
      <span class="font-bold text-lg">Instructions</span>
      <p class="mt-1">
        {{ selectedQuiz.instructions }}
      </p>
    </div>
    <div class="hidden sm:flex flex-col gap-6 cursor-pointer">
      <QuizCard
        @click="quizDetails(similarQuiz.id)"
        v-for="similarQuiz in similarQuizzes"
        :key="similarQuiz.id"
        :id="similarQuiz.id"
        :title="similarQuiz.title"
        :categories="similarQuiz.categories"
        :difficultyLevel="similarQuiz.difficulty_level"
        :plays="similarQuiz.plays"
        :image="similarQuiz.image"
        class="border border-light-gray bg-gray-100 rounded-lg"
      />
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
import QuizCard from "@/components/quiz/QuizCard.vue";
import QuizInnerWrapperImage from "@/components/quiz/QuizInnerWrapperImage.vue";

export default {
  components: {
    TheFooter,
    LinkBack,
    TheHeader,
    QuizWrapperCategory,
    QuizInnerStatistic,
    QuizCard,
    QuizInnerWrapperImage,
  },

  methods: {
    startQuiz() {
      this.$router.push({
        name: "quizQuestions",
        params: { id: this.selectedQuiz.id },
      });
    },

    quizDetails(id) {
      this.$router.push({ name: "quiz", params: { id: id } });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  computed: {
    selectedQuiz() {
      return this.$store.getters.quiz;
    },

    similarQuizzes() {
      return this.$store.getters.similarQuizzes;
    },
  },

  watch: {
    $route(to) {
      const quizId = to.params.id;
      this.$store.dispatch("fetchSimilarQuizzes", quizId);
      this.$store.dispatch("fetchQuiz", quizId);
    },
  },

  mounted() {
    const quizId = this.$route.params.id;

    this.$store.dispatch("fetchSimilarQuizzes", quizId);
    this.$store.dispatch("fetchQuiz", quizId);
  },
};
</script>
