<template>
  <layout-blurr
    class="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
  >
    <div class="bg-white w-1/4 p-4 rounded-xl">
      <IconX @click="backToHomePage" class="cursor-pointer ml-auto" />
      <div class="flex flex-col justify-center items-center gap-2">
        <IconQuizResults />
        <span class="font-semibold text-lg">Quiz Finished</span>
        <span class="text-gray-500">Your Results</span>
      </div>
      <div>
        <QuizModalResultsItem
          itemTitle="quiz_name"
          itemResult="Timeline of discoveries"
        />
        <QuizModalResultsItem
          itemTitle="quiz_level"
          itemResult="High"
          color="#F3B63F"
        />
        <QuizModalResultsItem itemTitle="time" itemResult="5:30" />
        <QuizModalResultsItem
          itemTitle="wrong_answers"
          itemResult="7"
          color="#E64646"
        />
        <QuizModalResultsItem
          itemTitle="correct_answers"
          itemResult="10"
          color="#12B76A"
        />
      </div>
      <button
        @click="backToHomePage"
        class="bg-saturated-blue transition-colors duration-300 hover:bg-blue-400 text-base font-semibold w-full text-white rounded-lg py-3"
      >
        Back to home
      </button>
    </div>
  </layout-blurr>
</template>

<script>
import LayoutBlurr from "@/components/layouts/LayoutBlurr.vue";
import IconQuizResults from "@/components/icons/IconQuizResults.vue";
import QuizModalResultsItem from "@/components/quiz/QuizModalResultsItem.vue";
import IconX from "@/components/icons/IconX.vue";

export default {
  components: {
    LayoutBlurr,
    IconQuizResults,
    QuizModalResultsItem,
    IconX,
  },

  methods: {
    backToHomePage() {
      this.$router.push({ name: "quizzes" });
    },
  },
};
</script>
