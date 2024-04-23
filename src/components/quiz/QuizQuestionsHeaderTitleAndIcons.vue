<template>
  <div
    v-if="showStatistics"
    class="hidden sm:flex gap-6 items-center rounded-lg border border-light-gray bg-gray-100 pb-2 pt-4 px-6"
  >
    <span class="font-bold text-base whitespace-nowrap pb-2 pr-4">{{
      title
    }}</span>
    <span class="pb-2 pr-2">
      <IconPin color="black" />
    </span>
    <QuizInnerStatistic statistic="questions" color="black" />
    <QuizInnerStatistic statistic="points" color="black" />
    <QuizInnerStatistic statistic="count" color="black" />
    <QuizInnerStatistic statistic="time" color="black" />
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

  data() {
    return {
      showStatistics: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.showStatistics = window.scrollY > 150;
    },
  },
};
</script>
