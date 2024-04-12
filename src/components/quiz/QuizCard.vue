<template>
  <div class="p-5 inline-block content-center">
    <div class="mb-1">
      <img src="@/assets/images/quiz-test-image.svg" alt="Quiz card image" />
    </div>
    <div>
      <div class="my-2 flex gap-8">
        <span class="text-saturated-blue font-semibold">Geography</span>
        <span class="text-saturated-blue font-semibold">World</span>
      </div>
      <span class="text-dark-blue-gray font-semibold text-2xl"
        >British Overseas Flags</span
      >
    </div>
    <div class="my-2 flex flex-wrap gap-4 mt-4">
      <QuizCardInfoItem
        info="completed"
        title="Completed"
        details="Date time"
        :isCompleted="isQuizCompleted"
      />
      <QuizCardInfoItem
        info="time"
        title="Total time"
        details="N/A"
        :isCompleted="isQuizCompleted"
      />
    </div>
  </div>
</template>

<script>
import QuizCardInfoItem from "@/components/quiz/QuizCardInfoItem.vue";

export default {
  components: {
    QuizCardInfoItem,
  },

  data() {
    // Will probably change how this quiz is structured when I start working with the actual data.
    return {
      isQuizCompleted: false,
    };
  },
};
</script>
