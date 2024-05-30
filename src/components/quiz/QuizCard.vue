<template>
  <div class="p-5 inline-block content-center">
    <div
      class="mb-1 rounded-2xl overflow-hidden flex items-center justify-center h-[15rem]"
    >
      <img :src="image" class="object-cover h-full" alt="Quiz card image" />
    </div>
    <div>
      <div class="flex gap-x-8 gap-y-2 my-4 flex-wrap">
        <QuizWrapperCategory
          v-for="(category, index) in categories"
          :key="category.id"
          :label="category.title"
          :lastItem="index === categories.length - 1"
        />
      </div>
      <span class="text-dark-blue-gray font-semibold text-2xl">{{
        title
      }}</span>
    </div>
    <div class="my-2 flex flex-wrap gap-5 sm:gap-6 mt-6">
      <QuizCardInfoItem
        v-if="!results"
        info="not_completed"
        title="Not Completed"
        details="Date time"
      />
      <QuizCardInfoItem
        v-if="results"
        info="completed"
        title="Completed"
        :details="
          new Date(results.created_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        "
      />
      <QuizCardInfoItem
        info="time"
        title="Total time"
        :details="results ? `${results.time_taken}Minutes` : 'N/A'"
      />
      <QuizCardInfoItem title="Total users" :details="`${plays} plays`" />
      <QuizCardInfoItem
        info="difficulty"
        title="Difficulty Level"
        :color="difficultyLevel.color"
        :backgroundColor="difficultyLevel.background_color"
        :details="difficultyLevel.title"
      />
      <QuizCardInfoItem
        v-if="results"
        info="points"
        title="Points"
        :details="`${results.score}/${points}`"
      />
    </div>
  </div>
</template>

<script>
import QuizCardInfoItem from "@/components/quiz/QuizCardInfoItem.vue";
import QuizWrapperCategory from "@/components/quiz/QuizWrapperCategory.vue";

export default {
  components: {
    QuizCardInfoItem,
    QuizWrapperCategory,
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
    results: {
      type: Array,
      default: null,
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
