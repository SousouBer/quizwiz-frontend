<template>
  <div class="flex gap-2 items-center justify-center">
    <!-- <IconHash /> -->
    <component :is="iconComponent" v-if="iconComponent" />
    <span class="text-medium-dark-gray font-semibold select-none">{{
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
