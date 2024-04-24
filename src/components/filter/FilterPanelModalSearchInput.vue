<template>
  <div
    class="flex items-center gap-2 bg-white w-full py-6 px-4 sm:py-2 border sm:rounded-3xl border-gray-300"
  >
    <IconSearch />
    <input
      @input="changeSearchInput"
      v-model="input"
      class="w-full outline-none placeholder:text-medium-dark-gray"
      type="text"
      placeholder="Search"
    />
  </div>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch.vue";
export default {
  components: {
    IconSearch,
  },

  data() {
    return {
      input: "",
    };
  },

  methods: {
    changeSearchInput() {
      this.$store.commit("setInnerSearch", this.input);
    },
  },
};
</script>
