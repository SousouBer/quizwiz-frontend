<template>
  <div
    class="absolute -bottom-4 sm:bottom-0 right-0 transform translate-y-1/4 sm:translate-y-1/3"
  >
    <div class="relative">
      <div class="absolute heading-position-mobile sm:heading-position">
        <h1
          class="text-white text-5xl sm:text-8xl font-bold leading-12 sm:transform sm:translate-y-32 sm:translate-x-40"
        >
          Our mission is<br />
          to entertain<br />
          & educate.
        </h1>
      </div>
      <slot />

      <div
        class="absolute top-0 right-0 w-3/4 sm:landing-img -translate-x-16 -translate-y-2/3"
      >
        <img src="@/assets/images/landing-img.svg" alt="Landing image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
