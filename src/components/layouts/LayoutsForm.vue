<template>
  <div class="p-4 sm:p-16 sm:pr-56 sm:pt-14 flex-grow">
    <LinkBack />
    <slot></slot>
  </div>
</template>

<script>
import LinkBack from "@/components/ui/links/LinkBack.vue";

export default {
  components: {
    LinkBack,
  },
};
</script>
