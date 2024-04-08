<template>
  <!-- <TheHeader /> -->
  <main>
    <FilterPanel />
    <div class="px-6 sm:px-24 grid md:grid-cols-3 gap-8">
      <QuizCard />
    </div>
  </main>
  <TheFooter />
</template>

<script>
// import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import FilterPanel from "@/components/filter/FilterPanel.vue";
import QuizCard from "@/components/quiz/QuizCard.vue";

export default {
  components: {
    // TheHeader,
    TheFooter,
    FilterPanel,
    QuizCard,
  },
};
</script>
