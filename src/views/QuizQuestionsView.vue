<template>
  <div>
    <header class="fixed z-10 bg-white border-b-2 py-6 h-20 w-full px-24 flex">
      <QuizQuestionsHeaderTitleAndIcons
        :title="quiz.title"
        :categories="quiz.categories"
        :questions="quiz.questionsAndAnswers.length"
        :plays="quiz.plays"
        :time="quiz.time"
      />
      <IconX width="24" height="24" color="gray" class="ml-auto" />
    </header>
    <QuizQuestionsQuizDetails />
    <div class="flex justify-between px-6 sm:px-24 py-16">
      <div>
        <QuizQuestionAndAnswers
          v-for="(question, index) in quiz.questionsAndAnswers"
          :key="question.id"
          :order="index + 1"
          :points="question.points"
          :question="question.question"
          :answers="question.answers"
        />
      </div>
      <div>
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

  data() {
    // Will remove this data.
    return {
      quiz: {
        id: 1,
        title: "Timeline of Discoveries",
        time: 5,
        plays: 10,
        points: 8,
        categories: ["History", "Science"],
        questionsAndAnswers: [
          {
            id: 1,
            points: 2,
            question: "What is the capital of France?",
            answers: [
              { id: 1, text: "Paris" },
              { id: 2, text: "London" },
              { id: 3, text: "Berlin" },
              { id: 4, text: "Madrid" },
            ],
          },
          {
            id: 2,
            points: 3,
            question: "Who discovered penicillin?",
            answers: [
              { id: 1, text: "Alexander Fleming" },
              { id: 2, text: "Marie Curie" },
              { id: 3, text: "Isaac Newton" },
              { id: 4, text: "Albert Einstein" },
            ],
          },
          {
            id: 3,
            points: 1,
            question: "Who discovered penicillin?",
            answers: [
              { id: 1, text: "Alexander Fleming" },
              { id: 2, text: "Marie Curie" },
              { id: 3, text: "Isaac Newton" },
              { id: 4, text: "Albert Einstein" },
            ],
          },
          {
            id: 4,
            points: 3,
            question: "Who discovered penicillin?",
            answers: [
              { id: 1, text: "Alexander Fleming" },
              { id: 2, text: "Marie Curie" },
              { id: 3, text: "Isaac Newton" },
              { id: 4, text: "Albert Einstein" },
            ],
          },
        ],
      },
    };
  },
};
</script>
