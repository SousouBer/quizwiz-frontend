<template>
  <div
    class="gap-6 items-center rounded-lg border border-light-gray bg-gray-100 pt-2 px-2 sm:pb-2 sm:pt-4 sm:px-6"
  >
    <span class="font-bold text-xs sm:text-base whitespace-nowrap pb-2 pr-4">{{
      title
    }}</span>
    <div class="flex gap-4 mt-2 sm:mt-0">
      <span class="pb-2 pr-2">
        <IconPin color="black" class="hidden sm:block" />
        <IconPin color="black" width="14" class="sm:hidden" />
      </span>
      <QuizInnerStatistic statistic="questions" color="black" />
      <QuizInnerStatistic statistic="points" color="black" />
      <QuizInnerStatistic statistic="count" color="black" />
      <QuizInnerStatistic statistic="time" color="black" />
    </div>
  </div>
</template>

<script>
import IconPin from "@/components/icons/IconPin.vue";
import QuizInnerStatistic from "@/components/quiz/QuizInnerStatistic.vue";

export default {
  components: {
    IconPin,
    QuizInnerStatistic,
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
      type: Number,
      required: true,
    },
    plays: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
};
</script>
