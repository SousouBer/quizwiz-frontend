<template>
  <filter-layout-rounded-border>
    <filter-layout-filter-and-sort-by
      filterType="Sort by"
      classNames="flex flex-col items-start justify-start gap-4 mt-6"
    >
      <FilterPanelModalSortControl
        id="asc"
        criteria="A-Z"
        :isSelected="selectedCriteria === 'asc'"
        @select="selectCriteria('asc')"
      >
        <IconAscending />
      </FilterPanelModalSortControl>
      <FilterPanelModalSortControl
        id="desc"
        criteria="Z-A"
        :isSelected="selectedCriteria === 'desc'"
        @select="selectCriteria('desc')"
      >
        <IconDescending />
      </FilterPanelModalSortControl>
      <FilterPanelModalSortControl
        id="popular"
        criteria="Most Popular"
        :isSelected="selectedCriteria === 'popular'"
        @select="selectCriteria('popular')"
      >
        <IconMostPopular />
      </FilterPanelModalSortControl>
      <FilterPanelModalSortControl
        criteria="Newest"
        id="newest"
        :isSelected="selectedCriteria === 'newest'"
        @select="selectCriteria('newest')"
      >
        <IconNewest />
      </FilterPanelModalSortControl>
      <FilterPanelModalSortControl
        criteria="Oldest"
        id="oldest"
        :isSelected="selectedCriteria === 'oldest'"
        @select="selectCriteria('oldest')"
      >
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

  computed: {
    selectedCriteria() {
      return this.$store.getters.selectedSort;
    },
  },

  methods: {
    selectCriteria(id) {
      if (this.selectedCriteria === id) {
        this.$store.commit("setSelectedSort", null);
      } else {
        this.$store.commit("setSelectedSort", id);
      }
    },
  },
};
</script>
