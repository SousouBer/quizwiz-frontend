<template>
  <div
    class="flex items-center gap-2 bg-white w-full px-4 py-2 border rounded-3xl border-gray-300"
  >
    <IconSearch />
    <input
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
};
</script>
