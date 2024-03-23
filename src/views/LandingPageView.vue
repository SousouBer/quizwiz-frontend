<template>
  <div>
    <the-header></the-header>
    <main class="relative overflow-hidden">
      <section
        class="h-screen overflow-hidden md:h-auto py-6 px-16 md:px-24 md:pt-6 md:pb-32 relative"
      >
        <div class="w-72 sm:w-1/2">
          <img
            class="w-full"
            src="@/assets/images/quizwiz-title.svg"
            alt="Quiz wiz Title Logo"
          />
        </div>
        <h2 class="text-lg sm:text-4xl font-semibold text-gray-500">
          Play with us, Explore with us
        </h2>
        <landing-person-and-background class="sm:hidden">
          <img
            class="w-full"
            src="@/assets/images/black-background-mobile.svg"
            alt="Black background"
        /></landing-person-and-background>
      </section>
      <section
        class="ms:px-24 bg-vibrant-orange flex flex-col gap-4 py-14 px-10"
      >
        <span class="text-7xl ms:text-8xl font-black text-white">200+</span>
        <div>
          <div class="flex flex-row gap-5 items-center">
            <router-link
              to="/landing"
              class="underline sm:no-underline text-5xl font-black text-white"
            >
              Quiz games
            </router-link>
            <icon-show-more-quizzes class="sm:hidden"></icon-show-more-quizzes>
          </div>
        </div>
      </section>
      <section
        class="sm:px-24 bg-saturated-blue flex flex-row py-10 px-10 pr-24"
      >
        <div class="flex flex-col gap-4">
          <span class="text-7xl sm:text-8xl font-black text-white">25+</span>
          <router-link
            to="/landing"
            class="underline sm:no-underline text-5xl font-black text-white"
          >
            Different genre
          </router-link>
        </div>
        <div class="flex items-center justify-center">
          <icon-show-more-quizzes class="sm:hidden"></icon-show-more-quizzes>
        </div>
      </section>
      <landing-person-and-background class="hidden sm:block">
        <img
          class="w-full"
          src="@/assets/images/black-background.svg"
          alt="Black background"
        />
      </landing-person-and-background>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import LandingPersonAndBackground from "@/components/LandingPersonAndBackground.vue";
import IconShowMoreQuizzes from "@/components/icons/IconShowMoreQuizzes.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    LandingPersonAndBackground,
    IconShowMoreQuizzes,
  },
};
</script>
