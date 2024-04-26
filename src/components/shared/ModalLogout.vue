<template>
  <div
    class="z-10 absolute top-0 right-0 transform -translate-x-1/4 translate-y-1/4 w-80 bg-white border p-7 border-light-gray rounded-lg shadow-sm"
  >
    <div class="mb-4 w-10 h-10">
      <icon-unauthenticated-user class="h-full w-full" />
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col justify-center gap-1">
        <span class="font-semibold text-sm">{{ user.username }}</span>
        <span class="text-sm">{{ user.email }}</span>
      </div>
      <a href="#" class="flex items-end justify-end">
        <icon-logout @click="closeLogoutModal" class="cursor-pointer" />
      </a>
    </div>
  </div>
</template>

<script>
import IconUnauthenticatedUser from "@/components/icons/IconUnauthenticatedUser.vue";
import IconLogout from "@/components/icons/IconLogout.vue";

import { logout } from "@/services/auth";

export default {
  components: {
    IconUnauthenticatedUser,
    IconLogout,
  },

  methods: {
    async onLogout() {
      await logout();
    },

    closeLogoutModal() {
      this.$emit("close-logout-modal");
      this.onLogout().then(() => {
        this.$store.commit("setUserIsAuthenticated", false);
        localStorage.removeItem("userIsAuthenticated");

        this.$router.push({ name: "login" });
      });
    },
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
