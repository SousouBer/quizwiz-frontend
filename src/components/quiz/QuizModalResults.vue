<template>
  <layouts-blurr
    v-if="quizResults"
    class="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
  >
    <div class="bg-white w-1/4 p-4 rounded-xl">
      <IconX @click="backToHomePage" class="cursor-pointer ml-auto" />
      <div class="flex flex-col justify-center items-center gap-2">
        <IconQuizResults />
        <span class="font-semibold text-lg">Quiz Finished</span>
        <span class="text-gray-500">Your Results</span>
      </div>
      <div>
        <QuizModalResultsItem
          itemTitle="quiz_name"
          :itemResult="quizResults.title"
        />
        <QuizModalResultsItem
          itemTitle="quiz_level"
          :itemResult="quizResults.difficulty_level.title"
          :color="quizResults.difficulty_level.color"
        />
        <QuizModalResultsItem itemTitle="time" :itemResult="quizResults.time" />
        <QuizModalResultsItem
          itemTitle="wrong_answers"
          :itemResult="quizResults.wrong_answers"
          color="#E64646"
        />
        <QuizModalResultsItem
          itemTitle="correct_answers"
          :itemResult="quizResults.correct_answers"
          color="#12B76A"
        />
      </div>
      <QuizQuestionsButtonSubmit class="mt-3" text="Back to home" />
    </div>
  </layouts-blurr>
</template>

<script>
import LayoutsBlurr from "@/components/layouts/LayoutsBlurr.vue";
import IconQuizResults from "@/components/icons/IconQuizResults.vue";
import QuizModalResultsItem from "@/components/quiz/QuizModalResultsItem.vue";
import QuizQuestionsButtonSubmit from "@/components/quiz/QuizQuestionsButtonSubmit.vue";

import IconX from "@/components/icons/IconX.vue";

export default {
  components: {
    LayoutsBlurr,
    IconQuizResults,
    QuizModalResultsItem,
    QuizQuestionsButtonSubmit,
    IconX,
  },

  methods: {
    backToHomePage() {
      this.$store.commit("setQuizResults");
      this.$router.push({ name: "quizzes" });
    },
  },

  computed: {
    quizResults() {
      return this.$store.getters.quizResults;
    },
  },
};
</script>
