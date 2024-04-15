<template>
  <div>
    <header class="fixed border-b-2 py-6 h-20 w-full px-24">
      <IconX width="24" height="24" color="gray" class="ml-auto" />
    </header>
    <QuizQuestionsQuizDetails />
  </div>
</template>

<script>
import QuizQuestionsQuizDetails from "@/components/quiz/QuizQuestionsQuizDetails.vue";
import IconX from "@/components/icons/IconX.vue";

export default {
  components: {
    QuizQuestionsQuizDetails,
    IconX,
  },
};
</script>
