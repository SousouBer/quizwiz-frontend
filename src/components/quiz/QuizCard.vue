<template>
  <div class="p-5 inline-block content-center">
    <div class="mb-1 rounded-2xl overflow-hidden">
      <img :src="image" alt="Quiz card image" />
    </div>
    <div>
      <div class="my-2 flex gap-4 mt-4 flex-wrap">
        <span
          class="text-saturated-blue font-semibold"
          v-for="category in categories"
          :key="category.id"
          >{{ category.title }}</span
        >
      </div>
      <span class="text-dark-blue-gray font-semibold text-2xl">{{
        title
      }}</span>
    </div>
    <div class="my-2 flex flex-wrap gap-4 mt-4">
      <QuizCardInfoItem
        info="not_completed"
        title="Not Completed"
        details="Date time"
        :isCompleted="isQuizCompleted"
      />
      <QuizCardInfoItem
        info="time"
        title="Total time"
        details="N/A"
        :isCompleted="isQuizCompleted"
      />
      <QuizCardInfoItem
        title="Total users"
        :details="`${plays} plays`"
        :isCompleted="isQuizCompleted"
      />
      <QuizCardInfoItem
        info="difficulty"
        title="Difficulty Level"
        :color="difficultyLevel.color"
        :backgroundColor="difficultyLevel.background_color"
        :details="difficultyLevel.title"
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

  props: {
    categories: {
      type: Array,
      required: true,
    },
    difficultyLevel: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    isQuizCompleted: {
      type: Boolean,
      default: false,
      required: true,
    },
    plays: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
