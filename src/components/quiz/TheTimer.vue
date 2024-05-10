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
              ref="countdown"
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

  data() {
    return {
      timerTimeout: null,
      quizSubmitted: false,
    };
  },

  methods: {
    onSendResults() {
      // Disable scrolling when submitted quiz smodal is shown.
      document.body.classList.add("overflow-hidden");

      this.quizSubmitted = true;
      clearTimeout(this.timerTimeout);

      const results = this.$store.getters.answers;
      const quizId = this.$store.getters.quiz.id;
      const timeTaken = this.timeTaken();

      const answerIds = results.map((answer) => answer.answerId);

      console.log("this are resuls", results);
      this.$store.dispatch("sendChosenAnswers", {
        quiz_id: quizId,
        time: timeTaken,
        answers: answerIds,
      });

      this.$store.commit("clearSelectedAnswers");
    },

    countdown(minutes, seconds) {
      this.$refs.countdown.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      if (this.quizSubmitted) {
        return;
      }

      if (minutes === 0 && seconds === 1) {
        this.onSendResults();
      }

      this.timerTimeout = setTimeout(() => {
        if (seconds === 0) {
          this.countdown(minutes - 1, 59);
        } else {
          this.countdown(minutes, seconds - 1);
        }
      }, 1000);
    },

    timeTaken() {
      const testDuration = this.duration;
      const timePassed = this.$refs.countdown.textContent.split(":");

      const startMinutes = parseInt(testDuration * 60);
      const endMinutes = parseInt(timePassed[0]) * 60 + parseInt(timePassed[1]);

      const differenceInMinutes = startMinutes - endMinutes;

      const minutes = Math.floor(differenceInMinutes / 60);
      const seconds = Math.abs(differenceInMinutes % 60);

      const result = `${minutes}:${seconds}`;

      return result;
    },
  },

  computed: {
    answeredQuestionsCount() {
      // Count how many questions have been answered.
      const count = new Set(
        this.$store.getters.answers.map((item) => item.questionId),
      ).size;

      return `${count}/${this.questions}`;
    },
  },

  mounted() {
    this.countdown(this.duration, 0);
  },
};
</script>
