<template>
  <!-- <TheHeader /> -->
  <main>
    <FilterPanel />
    <div>
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
