<template>
  <div class="p-5 inline-block content-center">
    <div class="mb-1 rounded-2xl overflow-hidden">
      <img :src="image" alt="Quiz card image" />
    </div>
    <div>
      <div class="my-2 flex gap-4 mt-4 flex-wrap">
        <span
          class="text-saturated-blue font-semibold"
          v-for="category in categories"
          :key="category.id"
          >{{ category.title }}</span
        >
      </div>
      <span class="text-dark-blue-gray font-semibold text-2xl">{{
        title
      }}</span>
    </div>
    <div class="my-2 flex flex-wrap gap-4 mt-4">
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

export default {
  components: {
    QuizCardInfoItem,
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
