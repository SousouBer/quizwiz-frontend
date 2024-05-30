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
        <Input
          @focus="toggleElement"
          @input="debounce"
          ref="searchInput"
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
  inject: ["toggleBurgerMenuAndQuizIcon"],
  components: {
    IconX,
    IconSearch,
  },

  props: {
    isMobileSearch: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isFirstFocused: false,
      showBurgerAuthModal: false,
      searchInput: "",
      debounceTimeout: null,
    };
  },

  methods: {
    toggleElement() {
      this.isFirstFocused = true;
      if (this.isMobileSearch) {
        this.toggleBurgerMenuAndQuizIcon(false);
      }
    },
    closeInputField() {
      this.isFirstFocused = false;
      if (this.isMobileSearch) {
        this.toggleBurgerMenuAndQuizIcon(true);
      }

      this.searchInput = "";
      this.$refs.searchInput.value = "";

      const excistingQuery = { ...this.$route.query };

      delete excistingQuery.search;

      this.$router.push({ query: { ...excistingQuery } });
      this.$store.dispatch("fetchQuizzes", excistingQuery);
    },

    debounce() {
      clearTimeout(this.debounceTimeout);

      this.debounceTimeout = setTimeout(() => {
        this.searchInput = this.$refs.searchInput.value;
        this.$router
          .push({
            query: {
              ...this.$route.query,
              search: this.searchInput,
            },
          })
          .then(() => {
            this.$store.dispatch("fetchQuizzes", this.$route.query);
          });
      }, 500);
    },
  },

  mounted() {
    const search = this.$route.query.search;

    if (search) {
      this.searchInput = search;
      this.$refs.searchInput.value = search;
    }
  },
};
</script>
