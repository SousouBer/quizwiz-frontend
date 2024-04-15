<template>
  <div
    class="flex gap-2 items-center border-b sm:border-b-0 border-gray-100 pb-2 w-full relative"
  >
    <component :is="iconComponent" v-if="iconComponent" />
    <span
      class="text-medium-dark-gray font-semibold select-none text-sm whitespace-nowrap"
      >{{ label }}</span
    >
    <IconMiddleLine
      v-if="notLastItem"
      class="absolute top-0 left-0 transform translate-y-1/4 -translate-x-4"
      color="gray"
    />
  </div>
</template>

<script>
import IconHash from "@/components/icons/IconHash.vue";
import IconPoints from "@/components/icons/IconPoints.vue";
import IconTime from "@/components/icons/IconTime.vue";
import IconCount from "@/components/icons/IconCount.vue";
import IconMiddleLine from "@/components/icons/IconMiddleLine.vue";

export default {
  components: {
    IconHash,
    IconPoints,
    IconCount,
    IconTime,
    IconMiddleLine,
  },

  props: {
    statistic: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    notLastItem: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    iconComponent() {
      if (this.statistic === "questions") {
        return IconHash;
      } else if (this.statistic === "points") {
        return IconPoints;
      } else if (this.statistic === "count") {
        return IconCount;
      } else if (this.statistic === "time") {
        return IconTime;
      } else {
        return null;
      }
    },
  },
};
</script>
