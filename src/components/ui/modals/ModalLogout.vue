<template>
  <div
    class="absolute top-0 right-0 transform -translate-x-1/4 translate-y-1/4 w-80 bg-white border p-7 border-red-600"
  >
    <div class="mb-4">
      <icon-unauthenticated-user></icon-unauthenticated-user>
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col justify-center gap-1">
        <span class="font-semibold text-sm">Soso Beriashvili</span>
        <span class="text-sm">sosoberiashvili@gmail.com</span>
      </div>
      <div class="flex items-end justify-end">
        <icon-logout></icon-logout>
      </div>
    </div>
  </div>
</template>

<script>
import IconUnauthenticatedUser from "@/components/icons/IconUnauthenticatedUser.vue";
import IconLogout from "@/components/icons/IconLogout.vue";

export default {
  components: {
    IconUnauthenticatedUser,
    IconLogout,
  },
};
</script>
