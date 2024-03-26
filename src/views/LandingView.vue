<template>
  <div>
    <the-header></the-header>
    <main class="relative overflow-hidden">
      <div
        class="h-screen overflow-hidden md:h-auto py-6 px-16 md:px-24 md:pt-6 md:pb-32 relative"
      >
        <img
          class="w-72 sm:w-1/2"
          src="@/assets/images/quizwiz-title.svg"
          alt="Quiz wiz Title Logo"
        />
        <h2 class="text-lg sm:text-4xl font-semibold text-gray-500">
          Play with us, Explore with us
        </h2>
        <layouts-landing class="sm:hidden">
          <img
            class="w-full"
            src="@/assets/images/black-background-mobile.svg"
            alt="Black background"
        /></layouts-landing>
      </div>
      <div class="sm:px-24 bg-vibrant-orange flex flex-col gap-4 py-14 px-10">
        <span class="text-7xl sm:text-8xl font-black text-white">200+</span>
        <div class="flex flex-row gap-5 items-center">
          <router-link
            to="/landing"
            class="underline sm:no-underline text-5xl font-black text-white"
          >
            Quiz games
          </router-link>
          <icon-show-more-quizzes
            class="w-20 sm:hidden"
          ></icon-show-more-quizzes>
        </div>
      </div>
      <div
        class="sm:px-24 bg-saturated-blue flex flex-col gap-4 py-10 px-10 pr-24"
      >
        <span class="text-7xl sm:text-8xl font-black text-white">25+</span>
        <div class="flex flex-row gap-5 items-center">
          <router-link
            to="/landing"
            class="underline sm:no-underline text-5xl font-black text-white"
          >
            Different genre
          </router-link>
          <icon-show-more-quizzes
            class="sm:hidden w-20"
          ></icon-show-more-quizzes>
        </div>
      </div>
      <layouts-landing class="hidden sm:block">
        <img
          class="w-full"
          src="@/assets/images/black-background.svg"
          alt="Black background"
        />
      </layouts-landing>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import LayoutsLanding from "@/components/layouts/LayoutsLanding.vue";
import IconShowMoreQuizzes from "@/components/icons/IconShowMoreQuizzes.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    LayoutsLanding,
    IconShowMoreQuizzes,
  },
};
</script>
