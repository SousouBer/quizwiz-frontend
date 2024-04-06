<template>
  <div class="border-b py-3">
    <span class="font-semibold text-blue-500 select-none">{{
      filterType
    }}</span>
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
    },
    classNames: {
      type: String,
      required: true,
    },
  },
};
</script>
