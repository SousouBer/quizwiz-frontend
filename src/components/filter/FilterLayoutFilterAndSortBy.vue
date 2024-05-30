<template>
  <div class="border-b py-3 w-full">
    <span
      :class="{
        hidden: filterType === 'Filter by' || filterType === 'Sort by',
      }"
      class="font-semibold select-none sm:inline text-sm"
      :style="{ color: filterTypeColor }"
      >{{ filterType }}</span
    >
    <div :class="classNames" class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterType: {
      type: String,
      required: true,
      default: "",
    },
    classNames: {
      type: String,
      required: true,
    },
    filterTypeColor: {
      type: String,
      default: "#4B69FD",
    },
  },
};
</script>
