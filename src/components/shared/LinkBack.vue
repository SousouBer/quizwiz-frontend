<template>
  <router-link
    to="#"
    @click="goBack"
    class="cursor-pointer flex flex-row items-center gap-2 mb-12"
  >
    <IconBackArrow />
    <span class="font-medium text-sm">Back</span>
  </router-link>
</template>

<script>
import IconBackArrow from "@/components/icons/IconBackArrow.vue";

export default {
  components: {
    IconBackArrow,
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
