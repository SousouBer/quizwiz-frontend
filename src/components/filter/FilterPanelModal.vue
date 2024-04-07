<template>
  <div
    class="w-full h-full sm:h-auto sm:w-2/3 sm:p-2 sm:border sm:rounded-xl border-black bg-white absolute z-50 top-0 right-0 transform sm:translate-y-1/4 sm:-translate-x-24"
  >
    <div
      class="flex items-center justify-between sm:justify-center gap-4 py-7 px-4 sm:py-4 rounded-2xl bg-very-light-gray"
    >
      <FilterPanelToggleFilter
        :modalToggleButton="true"
        class="hidden sm:inline-block bg-black"
      />
      <FilterPanelModalButtonAction
        actionType="reset"
        text="Reset"
        class="sm:hidden font-semibold"
      />
      <FilterPanelModalSearchInput class="hidden sm:block" />
      <span class="font-semibold uppercase text-medium-dark-gray sm:hidden"
        >Filters</span
      >
      <div class="items-center gap-9 relative hidden sm:flex">
        <FilterPanelModalButtonAction actionType="confirm" text="Confirm" />
        <FilterPanelModalButtonAction
          actionType="reset"
          text="Reset all filters"
        />
        <IconMiddleLine
          class="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-1"
        />
      </div>
      <IconX
        @click="closeFilterModal"
        height="24"
        width="24"
        color="#374957"
        class="cursor-pointer"
      />
    </div>
    <FilterPanelModalSearchInput class="sm:hidden" />

    <div class="sm:flex sm:gap-2 bg-white">
      <FilterPanelModalButtonsFilterSort
        @toggle-selection-buttons="toggleFilterAndSort"
      />
      <FilterPanelModalFilterBy v-if="!showFilter" class="sm:w-3/5" />
      <FilterPanelModalSortBy v-else class="sm:flex-grow" />
    </div>
  </div>
</template>

<script>
import FilterPanelModalFilterBy from "@/components/filter/FilterPanelModalFilterBy.vue";
import FilterPanelModalSortBy from "@/components/filter/FilterPanelModalSortBy.vue";
import FilterPanelToggleFilter from "@/components/filter/FilterPanelToggleFilter.vue";
import IconX from "@/components/icons/IconX.vue";
import FilterPanelModalSearchInput from "@/components/filter/FilterPanelModalSearchInput.vue";
import FilterPanelModalButtonAction from "@/components/filter/FilterPanelModalButtonAction.vue";
import IconMiddleLine from "@/components/icons/IconMiddleLine.vue";
import FilterPanelModalButtonsFilterSort from "@/components/filter/FilterPanelModalButtonsFilterSort.vue";

export default {
  components: {
    FilterPanelModalFilterBy,
    FilterPanelModalSortBy,
    FilterPanelToggleFilter,
    FilterPanelModalSearchInput,
    FilterPanelModalButtonAction,
    FilterPanelModalButtonsFilterSort,
    IconX,
    IconMiddleLine,
  },

  data() {
    return {
      showFilter: false,
    };
  },

  methods: {
    closeFilterModal() {
      this.$emit("close-filter-modal");
    },

    toggleFilterAndSort(value) {
      this.showFilter = value;
    },
  },
};
</script>
