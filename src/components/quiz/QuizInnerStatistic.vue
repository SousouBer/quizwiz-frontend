<template>
  <div
    class="flex gap-2 items-center sm:justify-center border-b border-gray-100 pb-2 w-full"
  >
    <component :is="iconComponent" v-if="iconComponent" />
    <span class="text-medium-dark-gray font-semibold select-none text-sm">{{
      label
    }}</span>
  </div>
</template>

<script>
import IconHash from "@/components/icons/IconHash.vue";
import IconPoints from "@/components/icons/IconPoints.vue";
import IconTime from "@/components/icons/IconTime.vue";
import IconCount from "@/components/icons/IconCount.vue";

export default {
  components: {
    IconHash,
    IconPoints,
    IconCount,
    IconTime,
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
