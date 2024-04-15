<template>
  <div class="flex flex-col items-center pt-32">
    <span class="font-bold text-black text-4xl">Timeline of Discoveries</span>
    <div class="flex gap-8 my-6">
      <div class="relative flex items-center justify-center gap-8 pb-2">
        <IconPin
          class="absolute top-0 left-0 transform translate-y-0.5 -translate-x-7"
        />
        <QuizQuestionsCategoryItem label="History" />
        <QuizQuestionsCategoryItem label="Sports" />
        <QuizQuestionsCategoryItem label="Science" />
      </div>
      <div class="flex gap-8">
        <QuizInnerStatistic statistic="questions" label="10 Questions" />
        <QuizInnerStatistic statistic="points" label="8 Points" />
        <QuizInnerStatistic statistic="count" label="150 Plays" />
        <QuizInnerStatistic statistic="time" label="5m" />
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
};
</script>
