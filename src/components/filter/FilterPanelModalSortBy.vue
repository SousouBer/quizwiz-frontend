<template>
  <layouts-filter-rounded-border>
    <layouts-filter-and-sort-by
      filterType="Sort by"
      classNames="flex flex-col items-start justify-start gap-6 mt-6"
    >
      <div
        class="flex items-center gap-4 w-full px-3 py-2 rounded-xl bg-gray-100"
      >
        <IconAscending />
        <span class="cursor-pointer font-semibold">A-Z</span>
        <IconCheck width="16" height="16" color="green" />
      </div>
      <div class="flex items-center justify-center gap-4">
        <IconDescending />
        <span class="cursor-pointer font-semibold">Z-A</span>
        <div class="border border-red-500"></div>
      </div>
      <div class="flex items-center justify-center gap-4">
        <IconMostPopular />
        <span class="cursor-pointer font-semibold">Most popular</span>
      </div>
      <div class="flex items-center justify-center gap-4">
        <IconNewest />
        <span class="cursor-pointer font-semibold">Newest</span>
      </div>
      <div class="flex items-center justify-center gap-4">
        <IconOldest />
        <span class="cursor-pointer font-semibold">Oldest</span>
      </div>
    </layouts-filter-and-sort-by>
  </layouts-filter-rounded-border>
</template>

<script>
import LayoutsFilterRoundedBorder from "@/components/layouts/LayoutsFilterRoundedBorder.vue";
import LayoutsFilterAndSortBy from "@/components/layouts/LayoutsFilterAndSortBy.vue";
import IconAscending from "@/components/icons/IconAscending.vue";
import IconDescending from "@/components/icons/IconDescending.vue";
import IconMostPopular from "@/components/icons/IconMostPopular.vue";
import IconNewest from "@/components/icons/IconNewest.vue";
import IconOldest from "@/components/icons/IconOldest.vue";
import IconCheck from "@/components/icons/IconCheck.vue";

export default {
  components: {
    LayoutsFilterRoundedBorder,
    LayoutsFilterAndSortBy,
    IconAscending,
    IconDescending,
    IconMostPopular,
    IconNewest,
    IconOldest,
    IconCheck,
  },
};
</script>
