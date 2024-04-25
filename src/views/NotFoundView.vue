<template>
  <TheHeader />
  <div class="flex flex-col items-center gap-4 sm:gap-8 p-12">
    <span class="font- Raleway font-black text-4xl sm:text-6xl">Oops!</span>
    <span class="font-bold text-lg">Error 404</span>
    <img src="@/assets/images/not-found-error.svg" alt="404 page" />
    <router-link
      to="quizzes"
      class="flex items-center justify-center gap-2 cursor-pointer"
    >
      <IconGoHome />
      <span class="text-lg text-saturated-blue">Go home</span>
    </router-link>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import IconGoHome from "@/components/icons/IconGoHome.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    IconGoHome,
  },
};
</script>
