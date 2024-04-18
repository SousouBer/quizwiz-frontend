<template>
  <div class="mb-12">
    <div class="flex items-center gap-6 mb-4">
      <div class="relative">
        <span class="text-saturated-blue font-semibold"
          >Question - {{ order }}</span
        >
        <IconMiddleLine
          color="gray"
          class="absolute top-0 right-0 transform translate-y-1/3 translate-x-3"
        />
      </div>
      <span class="text-pinkish-mangeta font-semibold"
        >Points - {{ points }}</span
      >
    </div>
    <span class="font-bold text-lg">{{ question }}</span>
    <div
      v-if="points > 1"
      class="flex items-center gap-2 mt-4 border border-dark-green bg-green-50 rounded py-2 px-4"
    >
      <IconAlert color="#027A48" />
      <span class="text-dark-green font-semibold text-sm">{{
        answerInfo
      }}</span>
    </div>
    <div class="mt-4">
      <QuizAnswer
        v-for="answer in answers"
        :key="answer.id"
        :id="answer.id"
        :name="question.id"
        :title="answer.text"
      />
    </div>
  </div>
</template>

<script>
import QuizAnswer from "@/components/quiz/QuizAnswer.vue";
import IconMiddleLine from "@/components/icons/IconMiddleLine.vue";
import IconAlert from "@/components/icons/IconAlert.vue";

export default {
  components: {
    QuizAnswer,
    IconMiddleLine,
    IconAlert,
  },

  props: {
    order: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    },
  },

  // Will change this component props according to the data I'll get as a repsonse.
  computed: {
    answerInfo() {
      return `You can select ${this.points} options from questions`;
    },
  },
};
</script>
