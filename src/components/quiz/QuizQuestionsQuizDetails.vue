<template>
  <div class="flex flex-col items-center pt-80 sm:pt-32">
    <span class="font-bold text-black text-5xl px-4 text-center">{{
      title
    }}</span>
    <div class="flex flex-col sm:flex-row gap-8 my-6 px-12">
      <div
        class="relative flex flex-wrap sm:flex-nowrap items-center justify-center gap-y-2 gap-x-8 sm:gap-8 pb-2"
      >
        <QuizQuestionsCategoryItem
          class="pb-2"
          v-for="(category, index) in categories"
          :key="category.id"
          :label="category.title"
          :isFirstItem="index === 0"
          :isLastItem="index === categories.length - 1"
        />
        <QuizInnerStatistic
          class="border-none"
          statistic="questions"
          :label="`${questions} questions`"
        />
        <QuizInnerStatistic
          class="border-none"
          statistic="points"
          :label="`${points} points`"
        />
        <QuizInnerStatistic
          class="border-none"
          statistic="count"
          :label="`${plays} plays`"
        />
        <QuizInnerStatistic
          class="border-none"
          statistic="time"
          :label="`${time}m`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import QuizInnerStatistic from "@/components/quiz/QuizInnerStatistic.vue";
import QuizQuestionsCategoryItem from "@/components/quiz/QuizQuestionsCategoryItem.vue";

export default {
  components: {
    QuizInnerStatistic,
    QuizQuestionsCategoryItem,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    questions: {
      type: String,
      required: true,
    },
    points: {
      type: String,
      required: true,
    },
    plays: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
};
</script>
