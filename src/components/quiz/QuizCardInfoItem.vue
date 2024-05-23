<template>
  <div class="flex items-center gap-3">
    <component
      :is="iconComponent"
      :color="color"
      :backgroundColor="backgroundColor"
      v-if="iconComponent"
    />
    <div class="flex flex-col">
      <span class="text-dark-blue-gray font-semibold select-none text-sm">{{
        title
      }}</span>
      <span
        :class="{
          'text-inactive-gray': isGrayText,
        }"
        class="text-gray-800 select-none text-sm"
        >{{ details }}</span
      >
    </div>
  </div>
</template>

<script>
import IconDifficultyLevel from "@/components/icons/IconDifficultyLevel.vue";
import IconQuizCompleted from "@/components/icons/IconQuizCompleted.vue";
import IconQuizPoints from "@/components/icons/IconQuizPoints.vue";
import IconQuizNotCompleted from "@/components/icons/IconQuizNotCompleted.vue";

export default {
  components: {
    IconDifficultyLevel,
    IconQuizCompleted,
    IconQuizPoints,
    IconQuizNotCompleted,
  },
  props: {
    info: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconComponent() {
      if (this.info === "difficulty") {
        return IconDifficultyLevel;
      } else if (this.info === "completed") {
        return IconQuizCompleted;
      } else if (this.info === "not_completed") {
        return IconQuizNotCompleted;
      } else if (this.info === "points") {
        return IconQuizPoints;
      } else {
        return null;
      }
    },
    isGrayText() {
      return this.info === "not_completed" || this.details === "N/A";
    },
  },
};
</script>
