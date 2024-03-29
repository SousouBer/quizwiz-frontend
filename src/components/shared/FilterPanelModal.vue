<template>
  <div class="w-2/3 p-2 border border-black">
    <div
      class="flex items-center justify-center gap-4 p-4 bg-gray-200 rounded-2xl"
    >
      <FilterPanelButtonFilter :modalButtonFilter="true" class="bg-black" />
      <input class="w-full" type="text" placeholder="Search" />
      <IconX class="w-6 h-6" />
    </div>
    <div class="flex gap-2">
      <FilterPanelModalFilterBy />
      <FilterPanelModalSortBy />
    </div>
  </div>
</template>

<script>
import FilterPanelModalFilterBy from "@/components/shared/FilterPanelModalFilterBy.vue";
import FilterPanelModalSortBy from "@/components/shared/FilterPanelModalSortBy.vue";
import FilterPanelButtonFilter from "@/components/ui/buttons/filterPanel/FilterPanelButtonFilter.vue";
import IconX from "@/components/icons/IconX.vue";

export default {
  components: {
    FilterPanelModalFilterBy,
    FilterPanelModalSortBy,
    FilterPanelButtonFilter,
    IconX,
  },
};
</script>
