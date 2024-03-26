<template>
  <main class="flex flex-row">
    <slot name="imageContent"></slot>
    <div class="p-4 sm:p-16 sm:pr-56 sm:pt-14 flex-grow">
      <link-back></link-back>
      <slot></slot>
    </div>
  </main>
</template>

<script>
import LinkBack from "@/components/ui/links/LinkBack.vue";

export default {
  components: {
    LinkBack,
  },
};
</script>
