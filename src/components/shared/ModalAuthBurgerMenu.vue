<template>
  <layout-blurr @click="closeAuthModal">
    <div @click.stop class="bg-white w-3/4 flex flex-col p-6">
      <links-burger-menu @close-modal="closeAuthModal"></links-burger-menu>
      <logout-burger-menu v-if="isAuthenticated"></logout-burger-menu>
      <links-landing v-if="!isAuthenticated"></links-landing>
    </div>
  </layout-blurr>
</template>

<script>
import LayoutBlurr from "@/components/layouts/LayoutBlurr.vue";
import LinksBurgerMenu from "@/components/ui/links/LinksBurgerMenu.vue";
import LogoutBurgerMenu from "@/components/shared/LogoutBurgerMenu.vue";
import LinksLanding from "@/components/ui/links/LinksLanding.vue";

export default {
  components: {
    LayoutBlurr,
    LinksBurgerMenu,
    LogoutBurgerMenu,
    LinksLanding,
  },

  data() {
    return {
      isAuthenticated: true,
    };
  },

  methods: {
    closeAuthModal() {
      this.$emit("close-auth-modal");
    },
  },
};
</script>
