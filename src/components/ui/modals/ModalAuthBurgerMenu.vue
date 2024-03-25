<template>
  <layout-blurr @click="closeAuthModal">
    <div @click.stop class="bg-white w-3/4 flex flex-col p-6">
      <links-burger-menu @close-modal="closeAuthModal"></links-burger-menu>
      <modal-logout-burger-menu
        v-if="isAuthenticated"
      ></modal-logout-burger-menu>
      <links-landing v-if="!isAuthenticated"></links-landing>
    </div>
  </layout-blurr>
</template>

<script>
import LayoutBlurr from "@/components/layouts/LayoutBlurr.vue";
import LinksBurgerMenu from "@/components/ui/links/LinksBurgerMenu.vue";
import ModalLogoutBurgerMenu from "@/components/ui/modals/ModalLogoutBurgerMenu.vue";
import LinksLanding from "@/components/ui/links/LinksLanding.vue";

export default {
  components: {
    LayoutBlurr,
    LinksBurgerMenu,
    ModalLogoutBurgerMenu,
    LinksLanding,
  },

  data() {
    return {
      isAuthenticated: false,
    };
  },

  methods: {
    closeAuthModal() {
      this.$emit("close-auth-modal");
    },
  },
};
</script>
