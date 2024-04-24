<template>
  <div
    class="flex items-start sm:items-center flex-col sm:flex-row gap-3 sm:px-24 sm:py-12"
  >
    <div class="flex items-center gap-4 pt-3 w-11/12 overflow-hidden border-b">
      <FilterPanelCategoryItem label="All Quizzes" id="all_quizzes" />
      <FilterPanelCategoryItem
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :label="category.title"
      />
    </div>
    <div
      class="hidden sm:inline-block transition-all duration-300 ease-in-out hover:bg-gray-200 p-2 rounded-full cursor-pointer"
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
import FilterPanelModal from "@/components/filter/FilterPanelModal.vue";
import FilterPanelCategoryItem from "@/components/filter/FilterPanelCategoryItem.vue";

export default {
  components: {
    FilterPanelToggleFilter,
    FilterPanelModal,
    IconCategorySlider,
    FilterPanelCategoryItem,
  },

  data() {
    return {
      showFilterModal: false,
    };
  },

  methods: {
    toggleFilterModal() {
      this.showFilterModal = !this.showFilterModal;
    },
  },

  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
};
</script>
