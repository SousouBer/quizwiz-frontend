<template>
  <TheHeader />
  <LayoutsErrorPage
    label="Oops!"
    description="Error 404"
    src="/images/not-found-error.svg"
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
