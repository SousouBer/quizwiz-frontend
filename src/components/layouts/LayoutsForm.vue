<template>
  <div class="py-4 px-5 sm:p-16 sm:pr-56 sm:pt-14 flex-grow">
    <LinkBack />
    <slot />
  </div>
</template>

<script>
import LinkBack from "@/components/shared/LinkBack.vue";

export default {
  components: {
    LinkBack,
  },
};
</script>
