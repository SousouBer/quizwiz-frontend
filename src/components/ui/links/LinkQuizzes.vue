<template>
  <div class="relative">
    <IconDotBlue
      v-if="showBlueDot"
      width="10"
      height="10"
      class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[18px]"
    />
    <router-link
      :to="{ name: 'quizzes' }"
      :class="footerOrHeaderClasses"
      class="font-semibold hover:text-gray-600 transition-colors duration-300 ease-in-out"
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

  props: {
    isFooterLink: {
      type: Boolean,
      default: false,
    },
    isHeaderLink: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    showBlueDot() {
      return (
        this.$route.name === "quizzes" &&
        !this.isFooterLink &&
        this.isHeaderLink
      );
    },

    footerOrHeaderClasses() {
      return this.isFooterLink
        ? "text-medium-dark-gray text-xs"
        : "text-gray-600 text-sm ";
    },
  },
};
</script>
