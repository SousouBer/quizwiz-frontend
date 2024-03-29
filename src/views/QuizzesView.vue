<template>
  <TheHeader />
  <main>
    <FilterPanel />
    <FilterPanelModal />
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import FilterPanel from "@/components/filter/FilterPanel.vue";
import FilterPanelModal from "@/components/filter/FilterPanelModal.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    FilterPanel,
    FilterPanelModal,
  },
};
</script>
