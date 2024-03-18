<template>
  <div>
    <the-header></the-header>
    <main>
      <h1>Landing works!</h1>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter },
};
</script>

<style scoped></style>
