<template>
  <div class="border-b py-3">
    <span
      :class="{
        hidden: filterType === 'Filter by' || filterType === 'Sort by',
      }"
      class="font-semibold text-blue-500 select-none sm:inline"
      >{{ filterType }}</span
    >
    <div :class="classNames" class="mt-3">
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
  },
};
</script>
