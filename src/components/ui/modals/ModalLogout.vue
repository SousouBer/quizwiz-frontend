<template>
  <div
    class="absolute top-0 right-0 transform -translate-x-1/4 translate-y-1/4 w-80 bg-white border p-7 border-red-600"
  >
    <div class="mb-4">
      <img
        src="@/assets/images/unauthenticated-user-icon.svg"
        alt="User image"
      />
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col justify-center gap-1">
        <span class="font-semibold text-sm">Soso Beriashvili</span>
        <span class="text-sm">sosoberiashvili@gmail.com</span>
      </div>
      <div class="flex items-end justify-end">
        <img
          class="cursor-pointer"
          src="@/assets/images/logout-icon.svg"
          alt="Logout icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
