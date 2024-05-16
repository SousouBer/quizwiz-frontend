<template>
  <filter-layout-rounded-border>
    <div class="w-full sm:w-auto">
      <filter-layout-filter-and-sort-by
        v-if="isAuthenticated"
        filterType="Filter by"
      >
        <FilterPanelModalCheckbox labelFor="My quizzes" name="my_quizzes" />
        <FilterPanelModalCheckbox
          labelFor="Not completed"
          name="not_completed_quizzes"
        />
      </filter-layout-filter-and-sort-by>
      <filter-layout-filter-and-sort-by
        filterType="Levels"
        filterTypeColor="#000"
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
        filterTypeColor="#000"
        classNames="flex flex-wrap gap-2.5 gap-y-3"
      >
        <FilterPanelSelectionChip
          @click="showActionButtons"
          class="px-5 py-1.5"
          v-for="category in categories"
          :key="category.id"
          :id="category.id"
          :label="category.title"
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

    isAuthenticated() {
      return this.$store.getters.user;
    },
  },
};
</script>
