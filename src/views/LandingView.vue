<template>
  <div>
    <TheHeader route="landing" />
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
        <LayoutsLanding class="sm:hidden">
          <img
            class="w-full"
            src="@/assets/images/black-background-mobile.svg"
            alt="Black background"
        /></LayoutsLanding>
      </div>
      <LayoutsQuizListing
        :statistics="`${quizListings.quizzes_count}+`"
        title="Quiz games"
        link="quizzes"
        class="bg-vibrant-orange py-14 px-10"
      />
      <LayoutsQuizListing
        :statistics="`${quizListings.categories_count}+`"
        title="Different genre"
        link="quizzes"
        class="bg-saturated-blue py-10 px-10 pr-24"
      />
      <LayoutsLanding class="hidden sm:block">
        <img
          class="w-full"
          src="@/assets/images/black-background.svg"
          alt="Black background"
        />
      </LayoutsLanding>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import LayoutsLanding from "@/components/layouts/LayoutsLanding.vue";
import LayoutsQuizListing from "@/components/layouts/LayoutsQuizListing.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    LayoutsLanding,
    LayoutsQuizListing,
  },

  computed: {
    quizListings() {
      return this.$store.getters.contacts;
    },
  },
};
</script>
