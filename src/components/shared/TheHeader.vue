<template>
  <header class="flex justify-between items-center px-24 py-4 border-b">
    <div class="flex items-center gap-14">
      <div>
        <a href="#">
          <img
            src="/src/assets/images/quizwiz-header-logo.svg"
            alt="Quiz wiz Logo"
          />
        </a>
      </div>
      <div>
        <a
          href="#"
          class="text-gray-500 font-semibold hover:text-gray-600 transition-colors duration-300 ease-in-out"
          >Quizzes</a
        >
      </div>
    </div>
    <div class="flex justify-center items-center gap-1">
      <div
        :class="{ 'active-searchbar': isFirstFocused }"
        class="w-28 border border-transparent h-11 overflow-hidden transition-all duration-300 ease-out"
      >
        <div
          class="flex flex-row items-center justify-center h-full transition-all duration-300 ease-out"
        >
          <div class="flex items-center justify-center gap-1 px-4 w-full">
            <div class="flex items-center justify-center">
              <img
                class="w-full h-full"
                src="/src/assets/images/search-quizzes-icon.svg"
                alt="Search icon"
              />
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
            <img
              src="/src/assets/images/hide-input-x.svg"
              alt="Hide input icon"
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src="/src/assets/images/unauthenticated-user-icon.svg"
          alt="Unauthenticated user icon"
        />
      </div>
    </div>
  </header>
</template>

<script>
// import BaseButton from "../ui/buttons/BaseButton.vue";

export default {
  components: {
    // BaseButton,
  },

  data() {
    return {
      isFirstFocused: false,
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

<style scoped>
.active-searchbar {
  border: 1px solid gray;
  border-radius: 10px;
  width: 24rem;
}
</style>
