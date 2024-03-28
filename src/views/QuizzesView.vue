<template>
  <TheHeader />
  <main>
    <FilterPanel />
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import FilterPanel from "@/components/shared/FilterPanel.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    FilterPanel,
  },
};
</script>
