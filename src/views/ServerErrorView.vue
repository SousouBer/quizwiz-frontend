<template>
  <TheHeader />
  <LayoutsErrorPage
    label="Internal server error!"
    description="Error 500"
    src="/images/internal-server-error.svg"
  />
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";
import LayoutsErrorPage from "@/components/layouts/LayoutsErrorPage.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    LayoutsErrorPage,
  },
};
</script>
