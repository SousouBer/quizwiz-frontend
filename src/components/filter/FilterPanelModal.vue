<template>
  <div class="w-2/3 p-2 border rounded-xl border-black bg-white">
    <div
      class="flex items-center justify-center gap-4 p-4 rounded-2xl bg-very-light-gray"
    >
      <FilterPanelToggleFilter :modalToggleButton="true" class="bg-black" />
      <FilterPanelModalSearchInput />
      <div class="flex items-center gap-9 relative">
        <FilterPanelModalButtonAction actionType="confirm" />
        <FilterPanelModalButtonAction actionType="reset" />
        <IconMiddleLine
          class="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-1"
        />
      </div>
      <IconX
        @click="closeFilterModal"
        height="40"
        width="40"
        color="#374957"
        class="cursor-pointer"
      />
    </div>
    <div class="flex gap-2">
      <FilterPanelModalFilterBy class="w-3/5" />
      <FilterPanelModalSortBy class="flex-grow" />
    </div>
  </div>
</template>

<script>
import FilterPanelModalFilterBy from "@/components/filter/FilterPanelModalFilterBy.vue";
import FilterPanelModalSortBy from "@/components/filter/FilterPanelModalSortBy.vue";
import FilterPanelToggleFilter from "@/components/filter/FilterPanelToggleFilter.vue";
import IconX from "@/components/icons/IconX.vue";
import FilterPanelModalSearchInput from "@/components/filter/FilterPanelModalSearchInput.vue";
import FilterPanelModalButtonAction from "@/components/filter/FilterPanelModalButtonAction.vue";
import IconMiddleLine from "@/components/icons/IconMiddleLine.vue";

export default {
  components: {
    FilterPanelModalFilterBy,
    FilterPanelModalSortBy,
    FilterPanelToggleFilter,
    FilterPanelModalSearchInput,
    FilterPanelModalButtonAction,
    IconX,
    IconMiddleLine,
  },

  methods: {
    closeFilterModal() {
      this.$emit("close-filter-modal");
    },
  },
};
</script>
