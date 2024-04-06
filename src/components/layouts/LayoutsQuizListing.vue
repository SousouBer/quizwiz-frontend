<template>
  <div class="sm:px-24 flex flex-col gap-4">
    <span class="text-7xl sm:text-8xl font-black text-white">{{
      statistics
    }}</span>
    <div class="flex flex-row gap-5 items-center">
      <router-link
        :to="link"
        class="underline sm:no-underline text-5xl font-black text-white"
      >
        {{ title }}
      </router-link>
      <icon-show-more-quizzes class="sm:hidden w-20" />
    </div>
  </div>
</template>

<script>
import IconShowMoreQuizzes from "@/components/icons/IconShowMoreQuizzes.vue";

export default {
  components: {
    IconShowMoreQuizzes,
  },

  props: {
    statistics: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
