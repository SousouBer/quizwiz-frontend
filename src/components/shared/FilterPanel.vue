<template>
  <div class="flex items-center gap-4 px-24 py-12">
    <div class="flex items-center gap-6 w-11/12 overflow-hidden">
      <FilterPanelButtonCategory category="All Quizzes" />
      <FilterPanelButtonCategory category="History" />
    </div>

    <div
      class="transition-all duration-300 ease-in-out hover:bg-gray-200 p-2 rounded-full cursor-pointer"
    >
      <IconCategorySlider />
    </div>

    <FilterPanelButtonFilter />
  </div>
</template>

<script>
import FilterPanelButtonCategory from "@/components/shared/FilterPanelButtonCategory.vue";
import IconCategorySlider from "@/components/icons/IconCategorySlider.vue";
import FilterPanelButtonFilter from "@/components/shared/FilterPanelButtonFilter.vue";

export default {
  components: {
    FilterPanelButtonCategory,
    IconCategorySlider,
    FilterPanelButtonFilter,
  },
};
</script>
