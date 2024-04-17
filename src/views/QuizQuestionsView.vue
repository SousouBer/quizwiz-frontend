<template>
  <div>
    <header class="fixed border-b-2 py-6 h-20 w-full px-24">
      <IconX width="24" height="24" color="gray" class="ml-auto" />
    </header>
    <QuizQuestionsQuizDetails />
    <div class="flex justify-between px-24 py-16">
      <div>
        <QuizQuestionAndAnswers
          number="1"
          points="3"
          question="What is the study of medicines and their action called?"
        />
      </div>
      <div>timer goes here</div>
    </div>
  </div>
</template>

<script>
import QuizQuestionsQuizDetails from "@/components/quiz/QuizQuestionsQuizDetails.vue";
import QuizQuestionAndAnswers from "@/components/quiz/QuizQuestionAndAnswers.vue";
import IconX from "@/components/icons/IconX.vue";

export default {
  components: {
    QuizQuestionsQuizDetails,
    QuizQuestionAndAnswers,
    IconX,
  },
};
</script>
