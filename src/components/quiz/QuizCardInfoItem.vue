<template>
  <div class="flex items-center gap-2">
    <component
      :is="iconComponent"
      :color="color"
      :backgroundColor="backgroundColor"
      v-if="iconComponent"
    />
    <div class="flex flex-col">
      <span class="text-dark-blue-gray font-semibold select-none">{{
        title
      }}</span>
      <span
        :class="{
          'text-gray-300': isGrayText,
        }"
        class="text-gray-800 select-none"
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
    isCompleted: {
      type: Boolean,
      default: false,
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
      } else if (this.info === "completed" && this.isCompleted) {
        return IconQuizCompleted;
      } else if (this.info === "not_completed" && !this.isCompleted) {
        return IconQuizNotCompleted;
      } else if (this.info === "points" && this.isCompleted) {
        return IconQuizPoints;
      } else {
        return null;
      }
    },
    isGrayText() {
      return (
        (this.info === "not_completed" && !this.isCompleted) ||
        (this.info === "time" && !this.isCompleted)
      );
    },
  },
};
</script>
