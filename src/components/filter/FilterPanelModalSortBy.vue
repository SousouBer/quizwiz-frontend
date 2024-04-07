<template>
  <layouts-filter-rounded-border>
    <layouts-filter-and-sort-by
      filterType="Sort by"
      classNames="flex flex-col items-start justify-start gap-4 mt-6"
    >
      <FilterPanelModalSortControl criteria="A-Z">
        <IconAscending />
      </FilterPanelModalSortControl>
      <FilterPanelModalSortControl criteria="Z-A">
        <IconDescending />
      </FilterPanelModalSortControl>
      <FilterPanelModalSortControl criteria="Most popular">
        <IconMostPopular />
      </FilterPanelModalSortControl>
      <FilterPanelModalSortControl criteria="Newest">
        <IconNewest />
      </FilterPanelModalSortControl>
      <FilterPanelModalSortControl criteria="Oldest">
        <IconOldest />
      </FilterPanelModalSortControl>
    </layouts-filter-and-sort-by>
  </layouts-filter-rounded-border>
</template>

<script>
import LayoutsFilterRoundedBorder from "@/components/layouts/LayoutsFilterRoundedBorder.vue";
import LayoutsFilterAndSortBy from "@/components/layouts/LayoutsFilterAndSortBy.vue";
import FilterPanelModalSortControl from "@/components/filter/FilterPanelModalSortControl.vue";
import IconAscending from "@/components/icons/IconAscending.vue";
import IconDescending from "@/components/icons/IconDescending.vue";
import IconMostPopular from "@/components/icons/IconMostPopular.vue";
import IconNewest from "@/components/icons/IconNewest.vue";
import IconOldest from "@/components/icons/IconOldest.vue";

export default {
  components: {
    LayoutsFilterRoundedBorder,
    LayoutsFilterAndSortBy,
    FilterPanelModalSortControl,
    IconAscending,
    IconDescending,
    IconMostPopular,
    IconNewest,
    IconOldest,
  },
};
</script>
