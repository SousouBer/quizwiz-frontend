<template>
  <div
    class="bg-white relative border border-gray-200 rounded-lg shadow-xl p-4 sm:p-8 pt-12 sm:w-96 w-full"
  >
    <span
      class="bg-white hidden sm:inline absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-12 py-3 rounded-lg border border-gray-200 shadow-sm font-semibold text-base text-gray-600"
      >Timer</span
    >
    <div class="pb-4 sm:pb-6 sm:mb-8 border-b border-gray-300 sm:px-20">
      <div>
        <div class="mb-4 sm:hidden flex gap-3 items-center">
          <QuizQuestionsHeaderTitleAndIcons :title="title" class="w-full" />
          <QuizQuestionsWrapperTimerInfo label="Questions">
            <span class="font-bold text-green-500">
              {{ answeredQuestionsCount }}
            </span>
          </QuizQuestionsWrapperTimerInfo>
        </div>
        <div class="flex flex-row gap-3">
          <QuizQuestionsButtonSubmit
            @click="onSendResults"
            class="sm:hidden w-full"
            text="Submit"
          />
          <QuizQuestionsWrapperTimerInfo label="Timer">
            <span
              id="countdown"
              class="text-gray-600 font-bold sm:font-medium sm:text-7xl text-xl"
            ></span>
          </QuizQuestionsWrapperTimerInfo>
        </div>
      </div>
    </div>
    <QuizQuestionsButtonSubmit
      @click="onSendResults"
      class="hidden sm:block"
      text="Submit"
    />
  </div>
</template>

<script>
import QuizQuestionsButtonSubmit from "@/components/quiz/QuizQuestionsButtonSubmit.vue";
import QuizQuestionsWrapperTimerInfo from "@/components/quiz/QuizQuestionsWrapperTimerInfo.vue";
import QuizQuestionsHeaderTitleAndIcons from "@/components/quiz/QuizQuestionsHeaderTitleAndIcons.vue";

export default {
  components: {
    QuizQuestionsButtonSubmit,
    QuizQuestionsWrapperTimerInfo,
    QuizQuestionsHeaderTitleAndIcons,
  },

  props: {
    duration: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    questions: {
      type: Number,
      required: true,
    },
  },

  methods: {
    onSendResults() {
      const results = this.$store.getters.answers;
      const quizId = this.$store.getters.quiz.id;
      const timeTaken = document.getElementById("countdown").textContent;

      const answerIds = results.map((answer) => answer.answerId);

      this.$store.dispatch("sendChosenAnswers", {
        quiz_id: quizId,
        time: timeTaken,
        answers: answerIds,
      });
    },

    countdown(minutes, seconds) {
      const countdownElement = document.getElementById("countdown");
      countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      if (minutes === 0 && seconds === 0) {
        countdownElement.textContent = "00:00";
        return;
      }

      setTimeout(() => {
        if (seconds === 0) {
          this.countdown(minutes - 1, 59);
        } else {
          this.countdown(minutes, seconds - 1);
        }
      }, 1000);
    },
  },

  computed: {
    answeredQuestionsCount() {
      // Count how many questions have been answered.
      const count = [
        ...new Set(this.$store.getters.answers.map((item) => item.questionId)),
      ].length;

      return `${count}/${this.questions}`;
    },
  },

  mounted() {
    this.countdown(this.duration, 0);
  },
};
</script>
