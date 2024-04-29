<template>
  <div>
    <div class="flex flex-row gap-4 items-center border-b mb-4">
      <div class="w-16 py-6">
        <icon-unauthenticated-user class="w-full h-full" />
      </div>
      <div class="flex flex-col">
        <span class="text-base font-semibold">{{ user.username }}</span>
        <span class="text-sm">{{ user.email }}</span>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button-base
        @click="onLogout"
        class="text-blue-500 text-center bg-very-light-gray font-bold rounded p-3 w-full"
        >Log out</button-base
      >
    </div>
  </div>
</template>

<script>
import IconUnauthenticatedUser from "@/components/icons/IconUnauthenticatedUser.vue";
import { logout } from "@/services/auth";

export default {
  components: {
    IconUnauthenticatedUser,
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
  },

  methods: {
    async onLogout() {
      await logout();

      this.$router.push({ name: "login" });
    },
  },
};
</script>
