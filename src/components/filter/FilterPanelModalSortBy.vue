<template>
  <filter-layout-rounded-border>
    <filter-layout-filter-and-sort-by
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
    </filter-layout-filter-and-sort-by>
  </filter-layout-rounded-border>
</template>

<script>
import FilterLayoutRoundedBorder from "@/components/filter/FilterLayoutRoundedBorder.vue";
import FilterLayoutFilterAndSortBy from "@/components/filter/FilterLayoutFilterAndSortBy.vue";
import FilterPanelModalSortControl from "@/components/filter/FilterPanelModalSortControl.vue";
import IconAscending from "@/components/icons/IconAscending.vue";
import IconDescending from "@/components/icons/IconDescending.vue";
import IconMostPopular from "@/components/icons/IconMostPopular.vue";
import IconNewest from "@/components/icons/IconNewest.vue";
import IconOldest from "@/components/icons/IconOldest.vue";

export default {
  components: {
    FilterLayoutRoundedBorder,
    FilterLayoutFilterAndSortBy,
    FilterPanelModalSortControl,
    IconAscending,
    IconDescending,
    IconMostPopular,
    IconNewest,
    IconOldest,
  },
};
</script>
