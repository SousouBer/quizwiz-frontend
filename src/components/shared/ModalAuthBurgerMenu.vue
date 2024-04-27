<template>
  <layouts-blurr @click="closeAuthModal">
    <div @click.stop class="bg-white w-3/4 flex flex-col p-6">
      <links-burger-menu @close-modal="closeAuthModal" />
      <logout-burger-menu v-if="isAuthenticated" />
      <links-landing v-if="!isAuthenticated" />
    </div>
  </layouts-blurr>
</template>

<script>
import LayoutsBlurr from "@/components/layouts/LayoutsBlurr.vue";
import LinksBurgerMenu from "@/components/ui/links/LinksBurgerMenu.vue";
import LogoutBurgerMenu from "@/components/shared/LogoutBurgerMenu.vue";
import LinksLanding from "@/components/ui/links/LinksLanding.vue";

export default {
  components: {
    LayoutsBlurr,
    LinksBurgerMenu,
    LogoutBurgerMenu,
    LinksLanding,
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.user;
    },
  },

  methods: {
    closeAuthModal() {
      this.$emit("close-auth-modal");
    },
  },
};
</script>
