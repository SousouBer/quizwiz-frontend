<template>
  <layouts-blurr
    v-if="quizResults"
    ref="resultsModal"
    class="absolute left-0 w-full h-full z-10 flex items-center justify-center"
  >
    <div class="bg-white w-full mx-4 sm:mx-0 sm:w-2/6 p-6 sm:p-8 rounded-xl">
      <IconX
        @click="handleQuizResults"
        width="20"
        height="20"
        class="cursor-pointer ml-auto"
      />
      <div class="flex flex-col justify-center items-center gap-2 mb-6">
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
      <QuizQuestionsButtonSubmit
        @click="handleQuizResults"
        class="mt-3"
        text="Back to home"
      />
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
    handleQuizResults() {
      this.$store.commit("setQuizResults");
      this.$store.dispatch("fetchQuizzes").then(() => {
        this.$router.push({ name: "quizzes" });

        // Enable scrolling again when the modal getshidden.
        document.body.classList.remove("overflow-hidden");
      });
    },

    // Center the results modal when submitted and when scrolled.
    positionModal() {
      const modal = this.$refs.resultsModal.$el;
      this.scrollPosition = window.scrollY;

      modal.style.top = `${this.scrollPosition}px`;
    },
  },

  computed: {
    quizResults() {
      return this.$store.getters.quizResults;
    },
  },

  watch: {
    quizResults(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.positionModal();
        });
      }
    },
  },
};
</script>
