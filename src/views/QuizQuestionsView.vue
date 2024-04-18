<template>
  <div>
    <header class="fixed z-10 bg-white border-b-2 py-6 h-20 w-full px-24 flex">
      <div
        class="flex gap-6 items-center rounded-lg border border-light-gray bg-gray-100 pb-2 pt-4 px-6"
      >
        <span class="font-bold text-base whitespace-nowrap pb-2 pr-4"
          >Timeline of Discoveries</span
        >
        <span class="pb-2 pr-2">
          <IconPin color="black" />
        </span>
        <QuizInnerStatistic statistic="questions" color="black" />
        <QuizInnerStatistic statistic="points" color="black" />
        <QuizInnerStatistic statistic="count" color="black" />
        <QuizInnerStatistic statistic="time" color="black" />
      </div>
      <IconX width="24" height="24" color="gray" class="ml-auto" />
    </header>
    <QuizQuestionsQuizDetails />
    <div class="flex justify-between px-6 sm:px-24 py-16">
      <div>
        <QuizQuestionAndAnswers
          number="1"
          points="3"
          name="first"
          question="What is the study of medicines and their action called?"
        />
        <QuizQuestionAndAnswers
          number="2"
          points="2"
          name="second"
          question="What is the study of medicines and their action called?"
        />
      </div>
      <div>
        <TheTimer duration="1" />
      </div>
    </div>
  </div>
</template>

<script>
import QuizQuestionsQuizDetails from "@/components/quiz/QuizQuestionsQuizDetails.vue";
import QuizQuestionAndAnswers from "@/components/quiz/QuizQuestionAndAnswers.vue";
import TheTimer from "@/components/quiz/TheTimer.vue";
import IconX from "@/components/icons/IconX.vue";
import IconPin from "@/components/icons/IconPin.vue";
import QuizInnerStatistic from "@/components/quiz/QuizInnerStatistic.vue";

export default {
  components: {
    QuizQuestionsQuizDetails,
    QuizQuestionAndAnswers,
    TheTimer,
    IconX,
    IconPin,
    QuizInnerStatistic,
  },
};
</script>
