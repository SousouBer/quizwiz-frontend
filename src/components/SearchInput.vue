<template>
  <div
    :class="{ 'active-searchbar': isFirstFocused }"
    class="w-28 border border-transparent h-11 overflow-hidden transition-all duration-300 ease-out"
  >
    <div
      class="flex flex-row items-center justify-center h-full transition-all duration-300 ease-out"
    >
      <div class="flex items-center justify-center gap-1 px-4 w-full">
        <div class="flex items-center justify-center">
          <iconSearch class="w-full h-full" />
        </div>
        <input
          @focus="toggleElement"
          v-model="searchInput"
          class="bg-transparent placeholder:text-sm w-full placeholder:px-1 outline-none transition-all duration-300 ease-out"
          type="text"
          placeholder="Search"
        />
      </div>
      <div
        v-if="isFirstFocused"
        @click="closeInputField"
        class="close-input border-l h-full rounded-tr-10 rounded-br-10 flex items-center justify-center w-12 cursor-pointer"
      >
        <icon-x />
      </div>
    </div>
  </div>
</template>

<script>
import IconX from "@/components/icons/IconX.vue";
import IconSearch from "@/components/icons/IconSearch.vue";

export default {
  components: {
    IconX,
    IconSearch,
  },
  data() {
    return {
      isFirstFocused: false,
      showBurgerAuthModal: false,
      searchInput: "",
    };
  },

  methods: {
    toggleElement() {
      this.isFirstFocused = true;
    },
    closeInputField() {
      this.isFirstFocused = false;
      this.searchInput = "";
    },
  },
};
</script>
