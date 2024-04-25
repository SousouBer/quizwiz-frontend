<template>
  <div class="flex flex-col items-center gap-4 sm:gap-8 p-12">
    <span class="font- Raleway font-black text-4xl sm:text-6xl">{{
      label
    }}</span>
    <span class="font-bold text-lg">{{ description }}</span>
    <img :src="src" :alt="description" />
    <router-link
      to="quizzes"
      class="flex items-center justify-center gap-2 cursor-pointer"
    >
      <IconGoHome />
      <span class="text-lg text-saturated-blue">Go home</span>
    </router-link>
  </div>
</template>

<script>
import IconGoHome from "@/components/icons/IconGoHome.vue";

export default {
  components: {
    IconGoHome,
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
