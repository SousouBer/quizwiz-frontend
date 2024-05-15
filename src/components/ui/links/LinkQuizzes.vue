<template>
  <div class="relative">
    <IconDotBlue
      v-if="showBlueDot"
      width="12"
      height="12"
      class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5"
    />
    <router-link
      :to="{ name: 'quizzes' }"
      class="text-dark-blue-gray text-lg font-semibold hover:text-gray-600 transition-colors duration-300 ease-in-out"
      >Quizzes</router-link
    >
  </div>
</template>

<script>
import IconDotBlue from "@/components/icons/IconDotBlue.vue";

export default {
  components: {
    IconDotBlue,
  },

  computed: {
    showBlueDot() {
      return this.$route.name === "quizzes";
    },
  },
};
</script>
