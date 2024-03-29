<template>
  <div class="flex items-center gap-4 px-24 py-12">
    <div class="flex items-center gap-6 w-11/12 overflow-hidden">
      <FilterPanelButtonCategory />
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
import FilterPanelButtonCategory from "@/components/ui/buttons/filterPanel/FilterPanelButtonCategory.vue";
import FilterPanelButtonFilter from "@/components/ui/buttons/filterPanel/FilterPanelButtonFilter.vue";
import IconCategorySlider from "@/components/icons/IconCategorySlider.vue";

export default {
  components: {
    FilterPanelButtonCategory,
    FilterPanelButtonFilter,
    IconCategorySlider,
  },
};
</script>
