<template>
  <div
    :class="{ 'rounded-xl bg-gray-100': isSelected }"
    class="flex items-center gap-4 w-full px-3 py-2 cursor-pointer"
    @click="selectCriteria"
  >
    <slot />
    <span class="cursor-pointer font-semibold">{{ criteria }}</span>
    <IconCheck
      v-if="isSelected"
      width="16"
      height="16"
      color="green"
      class="ml-auto"
    />
  </div>
</template>

<script>
import IconCheck from "@/components/icons/IconCheck.vue";

export default {
  components: {
    IconCheck,
  },

  props: {
    criteria: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    selectCriteria() {
      this.$emit("select");
    },
  },
};
</script>
