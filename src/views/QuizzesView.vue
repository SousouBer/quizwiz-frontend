<template>
  <TheHeader />
  <main class="relative pb-32 border-b">
    <FilterPanel />
    <div class="px-6 sm:px-24 grid md:grid-cols-3 gap-8 relative">
      <QuizCard class="shadow-xl" />
    </div>
    <QuizButtonLoadMore />
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import FilterPanel from "@/components/filter/FilterPanel.vue";
import QuizCard from "@/components/quiz/QuizCard.vue";
import QuizButtonLoadMore from "@/components/quiz/QuizButtonLoadMore.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    FilterPanel,
    QuizCard,
    QuizButtonLoadMore,
  },

  data() {
    return {
      categories: null,
    };
  },

  mounted() {
    this.$store.dispatch("fetchCategories");
  },
};
</script>
