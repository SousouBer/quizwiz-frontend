<template>
  <layouts-filter-rounded-border>
    <div>
      <layouts-filter-and-sort-by filterType="Filter by">
        <FilterPanelModalCheckbox labelFor="My quizzes" />
        <FilterPanelModalCheckbox labelFor="Not completed" />
      </layouts-filter-and-sort-by>
      <layouts-filter-and-sort-by
        filterType="Levels"
        classNames="flex flex-wrap gap-2"
      >
        <FilterPanelSelectionChip label="Starter" :isModalChip="true" />
      </layouts-filter-and-sort-by>
      <layouts-filter-and-sort-by
        filterType="Categories"
        classNames="flex flex-wrap gap-2"
      >
        <FilterPanelSelectionChip label="Science" :isModalChip="true" />
      </layouts-filter-and-sort-by>
    </div>
  </layouts-filter-rounded-border>
</template>

<script>
import LayoutsFilterRoundedBorder from "@/components/layouts/LayoutsFilterRoundedBorder.vue";
import LayoutsFilterAndSortBy from "@/components/layouts/LayoutsFilterAndSortBy.vue";
import FilterPanelModalCheckbox from "@/components/filter/FilterPanelModalCheckbox.vue";
import FilterPanelSelectionChip from "@/components/filter/FilterPanelSelectionChip.vue";

export default {
  components: {
    LayoutsFilterRoundedBorder,
    FilterPanelSelectionChip,
    LayoutsFilterAndSortBy,
    FilterPanelModalCheckbox,
  },
};
</script>
