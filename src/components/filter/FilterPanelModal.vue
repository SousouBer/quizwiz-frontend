<template>
  <div
    class="w-full h-full sm:h-auto sm:w-2/3 sm:p-2 sm:border sm:rounded-xl border-black bg-white absolute z-50 top-0 right-0 transform sm:translate-y-28 sm:-translate-x-24"
  >
    <div
      class="flex items-center justify-between sm:justify-center gap-4 py-7 px-4 sm:py-4 rounded-2xl bg-very-light-gray"
    >
      <FilterPanelToggleFilter
        :modalToggleButton="true"
        class="bg-black hidden sm:flex"
      />
      <FilterPanelModalButtonAction
        @click="resetOptions"
        actionType="reset"
        text="Reset"
        class="sm:hidden font-semibold"
      />
      <FilterPanelModalSearchInput class="hidden sm:flex" />
      <span class="font-semibold uppercase text-medium-dark-gray sm:hidden"
        >Filters</span
      >
      <div
        v-if="displayActionButtons"
        class="items-center gap-9 relative hidden sm:flex"
      >
        <FilterPanelModalButtonAction
          @click="confirmOptions"
          actionType="confirm"
          text="Confirm"
        />
        <FilterPanelModalButtonAction
          @click="resetOptions"
          actionType="reset"
          text="Reset all filters"
        />
        <IconMiddleLine
          class="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-2"
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
      <FilterPanelModalButtonsFilterAndSort
        @toggle-selection-buttons="toggleFilterAndSort"
      />
      <FilterPanelModalFilterBy v-if="!showFilter" class="sm:hidden" />
      <FilterPanelModalSortBy v-else class="sm:hidden" />
      <FilterPanelModalFilterBy class="hidden sm:flex sm:w-3/5" />
      <FilterPanelModalSortBy class="hidden sm:flex sm:flex-grow" />
    </div>
    <div class="sm:hidden absolute bottom-0 left-0 w-full p-4 bg-white">
      <FilterPanelModalButtonAction
        @click="confirmOptions"
        actionType="confirm"
        text="Confirm"
        class="py-4 w-full"
      />
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
import FilterPanelModalButtonsFilterAndSort from "@/components/filter/FilterPanelModalButtonsFilterAndSort.vue";

export default {
  components: {
    FilterPanelModalFilterBy,
    FilterPanelModalSortBy,
    FilterPanelToggleFilter,
    FilterPanelModalSearchInput,
    FilterPanelModalButtonAction,
    FilterPanelModalButtonsFilterAndSort,
    IconX,
    IconMiddleLine,
  },

  data() {
    return {
      showFilter: false,
      displayActionButtons: false,
    };
  },

  methods: {
    closeFilterModal() {
      this.$emit("close-filter-modal");
    },

    showActionButtons() {
      this.displayActionButtons = true;
    },

    toggleFilterAndSort(value) {
      this.showFilter = value;
    },

    confirmOptions() {
      this.closeFilterModal();
      this.displayActionButtons = false;

      const categories = this.$store.getters.selectedCategories;
      const levels = this.$store.getters.selectedLevels;
      const sort = this.$store.getters.selectedSort;
      const myQuizzes = this.$store.getters.myQuizzes;
      const completedQuizzes = this.$store.getters.completedQuizzes;

      const query = {};

      if (categories.length > 0) {
        query.categories = categories.join(",");
      }
      if (levels.length > 0) {
        query.levels = levels.join(",");
      }
      if (sort) {
        query.sort = sort;
      }
      if (myQuizzes) {
        query.my_quizzes = myQuizzes;
      }
      if (completedQuizzes) {
        query.completed_quizzes = completedQuizzes;
      }
      if (this.$route.query.search) {
        query.search = this.$route.query.search;
      }

      this.$router
        .push({
          query,
        })
        .then(() => {
          this.checkQueryParams();
          this.$store.dispatch("fetchQuizzes", query);
        });
    },

    checkQueryParams() {
      const queries = this.$route.query;

      let selectedOptionsCount = Object.keys(this.$route.query).length;

      if (queries.categories) {
        selectedOptionsCount += queries.categories.split(",").length - 1;
      }

      if (queries.levels) {
        selectedOptionsCount += queries.levels.split(",").length - 1;
      }

      this.$store.commit("setSelectedOptionsCount", selectedOptionsCount);
    },

    resetOptions() {
      this.$store.commit("clearValues");
      this.displayActionButtons = false;

      const urlCategories = this.$route.query.categories;
      const urlLevels = this.$route.query.levels;
      const urlSort = this.$route.query.sort;
      const urlMyQuizzes = this.$route.query.my_quizzes;
      const urlCompletedQuizzes = this.$route.query.completed_quizzes;

      if (urlCategories) {
        const categoryIds = urlCategories.split(",").map((id) => parseInt(id));
        this.$store.commit("setSelectedCategories", categoryIds);
      }

      if (urlLevels) {
        const levelIds = urlLevels.split(",").map((id) => parseInt(id));
        this.$store.commit("setSelectedLevels", levelIds);
      }

      if (urlSort) {
        this.$store.commit("setSelectedSort", urlSort);
      }

      if (urlMyQuizzes) {
        this.$store.commit("setMyQuizzes");
      }

      if (urlCompletedQuizzes) {
        this.$store.commit("setCompletedQuizzes");
      }
    },
  },

  provide() {
    return {
      showActionButtons: this.showActionButtons,
    };
  },

  mounted() {
    this.checkQueryParams();
  },
};
</script>
