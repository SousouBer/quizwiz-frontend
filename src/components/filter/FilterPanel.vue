<template>
  <div class="flex items-center gap-4 px-24 py-12">
    <div class="flex items-center gap-6 w-11/12 overflow-hidden">
      <FilterPanelSelectionChip />
    </div>
    <div
      class="transition-all duration-300 ease-in-out hover:bg-gray-200 p-2 rounded-full cursor-pointer"
    >
      <IconCategorySlider />
    </div>
    <FilterPanelToggleFilter @click="toggleFilterModal" />
    <FilterPanelModal
      v-if="showFilterModal"
      @close-filter-modal="toggleFilterModal"
    />
  </div>
</template>

<script>
import FilterPanelToggleFilter from "@/components/filter/FilterPanelToggleFilter.vue";
import IconCategorySlider from "@/components/icons/IconCategorySlider.vue";
import FilterPanelSelectionChip from "@/components/filter/FilterPanelSelectionChip.vue";
import FilterPanelModal from "@/components/filter/FilterPanelModal.vue";

export default {
  components: {
    FilterPanelToggleFilter,
    FilterPanelSelectionChip,
    FilterPanelModal,
    IconCategorySlider,
  },

  data() {
    return {
      showFilterModal: true,
    };
  },

  methods: {
    toggleFilterModal() {
      this.showFilterModal = !this.showFilterModal;
    },
  },
};
</script>
