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
            src="../assets/images/quizwiz-title.svg"
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
      <section class="px-24 bg-orange-500 flex flex-col py-14">
        <span class="text-8xl font-black text-white">200+</span>
        <h3 class="text-5xl font-black text-white">Quiz games</h3>
      </section>
      <section class="px-24 bg-blue-500 flex flex-col py-10">
        <span class="text-8xl font-black text-white">25+</span>
        <h3 class="text-5xl font-black text-white">Different genre</h3>
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

export default {
  components: { TheHeader, TheFooter, LandingPersonAndBackground },
};
</script>
