<template>
  <filter-layout-rounded-border>
    <div class="w-full sm:w-auto">
      <filter-layout-filter-and-sort-by filterType="Filter by">
        <FilterPanelModalCheckbox labelFor="My quizzes" />
        <FilterPanelModalCheckbox labelFor="Not completed" />
      </filter-layout-filter-and-sort-by>
      <filter-layout-filter-and-sort-by
        filterType="Levels"
        classNames="flex flex-wrap gap-2"
      >
        <FilterPanelSelectionChip
          label="Starter"
          color="white"
          selectedBackgroundColor="green"
          selectedColor="red"
          backgroundColor="black"
          :isModalChip="true"
        />
      </filter-layout-filter-and-sort-by>
      <filter-layout-filter-and-sort-by
        filterType="Categories"
        classNames="flex flex-wrap gap-2"
      >
        <FilterPanelSelectionChip
          label="Science"
          color="white"
          backgroundColor="black"
          :isModalChip="true"
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
  components: {
    FilterLayoutRoundedBorder,
    FilterPanelSelectionChip,
    FilterLayoutFilterAndSortBy,
    FilterPanelModalCheckbox,
  },
};
</script>
