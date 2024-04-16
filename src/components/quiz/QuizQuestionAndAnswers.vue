<template>
  <div>
    <div class="flex items-center gap-6 mb-4">
      <div class="relative">
        <span class="text-saturated-blue font-semibold">Question - 1</span>
        <IconMiddleLine
          color="gray"
          class="absolute top-0 right-0 transform translate-y-1/3 translate-x-3"
        />
      </div>
      <span class="text-pinkish-mangeta font-semibold">Points - 2</span>
    </div>
    <span class="font-bold text-lg"
      >What is the study of medicines and their action called?</span
    >
    <div>
      <QuizAnswer />
    </div>
  </div>
</template>

<script>
import QuizAnswer from "@/components/quiz/QuizAnswer.vue";
import IconMiddleLine from "@/components/icons/IconMiddleLine.vue";

export default {
  components: {
    QuizAnswer,
    IconMiddleLine,
  },
};
</script>
