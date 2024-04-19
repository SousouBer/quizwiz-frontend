<template>
  <div class="flex flex-col items-center pt-32">
    <span class="font-bold text-black text-5xl px-4 text-center">{{
      title
    }}</span>
    <div class="flex flex-col sm:flex-row gap-8 my-6">
      <div class="relative flex items-center justify-center gap-8 pb-2">
        <IconPin
          class="absolute top-0 left-0 transform translate-y-0.5 -translate-x-7"
        />
        <QuizQuestionsCategoryItem
          v-for="category in categories"
          :key="category.id"
          :label="category.title"
        />
      </div>
      <div class="flex gap-8">
        <QuizInnerStatistic
          statistic="questions"
          :label="`${questions} questions`"
        />
        <QuizInnerStatistic statistic="points" :label="`${points} points`" />
        <QuizInnerStatistic statistic="count" :label="`${plays} plays`" />
        <QuizInnerStatistic statistic="time" :label="`${time}m`" />
      </div>
    </div>
  </div>
</template>

<script>
import QuizInnerStatistic from "@/components/quiz/QuizInnerStatistic.vue";
import QuizQuestionsCategoryItem from "@/components/quiz/QuizQuestionsCategoryItem.vue";
import IconPin from "@/components/icons/IconPin.vue";

export default {
  components: {
    QuizInnerStatistic,
    QuizQuestionsCategoryItem,
    IconPin,
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
