<template>
  <div>
    <header class="fixed z-10 bg-white border-b-2 py-6 h-20 w-full px-24 flex">
      <QuizQuestionsHeaderTitleAndIcons :title="quiz.title" />
      <IconX width="24" height="24" color="gray" class="ml-auto" />
    </header>
    <QuizQuestionsQuizDetails
      :categories="quiz.categories"
      :title="quiz.title"
      :questions="quiz.questions_and_answers.length"
      :points="quiz.points"
      :plays="quiz.plays"
      :time="quiz.time"
    />
    <div class="flex justify-between px-6 sm:px-24 py-16">
      <div>
        <QuizQuestionAndAnswers
          v-for="(question, index) in quiz.questions_and_answers"
          :key="question.id"
          :id="question.id"
          :order="index + 1"
          :points="question.points"
          :question="question.question"
          :answers="question.answers"
        />
      </div>
      <div
        class="fixed top-0 right-0 transform translate-y-12 sm:translate-y-80 sm:-translate-x-1/4 w-full sm:w-auto"
      >
        <TheTimer :duration="quiz.time" />
      </div>
    </div>
    <Teleport to="body">
      <QuizModalResults />
    </Teleport>
  </div>
</template>

<script>
import QuizQuestionsQuizDetails from "@/components/quiz/QuizQuestionsQuizDetails.vue";
import QuizQuestionAndAnswers from "@/components/quiz/QuizQuestionAndAnswers.vue";
import QuizQuestionsHeaderTitleAndIcons from "@/components/quiz/QuizQuestionsHeaderTitleAndIcons.vue";
import TheTimer from "@/components/quiz/TheTimer.vue";
import IconX from "@/components/icons/IconX.vue";
import QuizModalResults from "@/components/quiz/QuizModalResults.vue";

export default {
  components: {
    QuizQuestionsQuizDetails,
    QuizQuestionAndAnswers,
    TheTimer,
    QuizQuestionsHeaderTitleAndIcons,
    IconX,
    QuizModalResults,
  },

  computed: {
    quiz() {
      return this.$store.getters.quiz;
    },
  },
};
</script>
