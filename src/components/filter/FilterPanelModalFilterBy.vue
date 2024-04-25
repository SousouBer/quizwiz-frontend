<template>
  <filter-layout-rounded-border>
    <div class="w-full sm:w-auto">
      <filter-layout-filter-and-sort-by filterType="Filter by">
        <FilterPanelModalCheckbox
          @click="showActionButtons"
          labelFor="My quizzes"
          name="my_quizzes"
        />
        <FilterPanelModalCheckbox
          @click="showActionButtons"
          labelFor="Not completed"
          name="not_completed_quizzes"
        />
      </filter-layout-filter-and-sort-by>
      <filter-layout-filter-and-sort-by
        filterType="Levels"
        classNames="flex flex-wrap gap-2"
      >
        <FilterPanelSelectionChip
          @click="showActionButtons"
          v-for="level in levels"
          :key="level.id"
          :id="level.id"
          :label="level.title"
          :isCategory="false"
          :color="level.color"
          :backgroundColor="level.background_color"
        />
      </filter-layout-filter-and-sort-by>
      <filter-layout-filter-and-sort-by
        filterType="Categories"
        classNames="flex flex-wrap gap-2"
      >
        <FilterPanelSelectionChip
          @click="showActionButtons"
          v-for="category in categories"
          :key="category.id"
          :id="category.id"
          :label="category.title"
          color="white"
          backgroundColor="black"
          :isCategory="true"
        />
      </filter-layout-filter-and-sort-by>
    </div>
  </filter-layout-rounded-border>
</template>

<script>
import FilterLayoutRoundedBorder from "@/components/filter/FilterLayoutRoundedBorder.vue";
import FilterLayoutFilterAndSortBy from "@/components/filter/FilterLayoutFilterAndSortBy.vue";
import FilterPanelModalCheckbox from "@/components/filter/FilterPanelModalCheckbox.vue";
import FilterPanelSelectionChip from "@/components/filter/FilterPanelSelectionChip.vue";

export default {
  inject: ["showActionButtons"],
  components: {
    FilterLayoutRoundedBorder,
    FilterPanelSelectionChip,
    FilterLayoutFilterAndSortBy,
    FilterPanelModalCheckbox,
  },

  computed: {
    categories() {
      return this.$store.getters.categories;
    },

    levels() {
      return this.$store.getters.levels;
    },
  },
};
</script>
