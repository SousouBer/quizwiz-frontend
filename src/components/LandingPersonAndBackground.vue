<template>
  <div
    class="absolute -bottom-4 sm:bottom-0 right-0 transform translate-y-1/4 sm:translate-y-1/3"
  >
    <div class="relative">
      <div class="absolute heading-position-mobile sm:heading-position">
        <h1 class="text-white text-5xl sm:text-7xl font-bold leading-12">
          Our mission is<br />
          to entertain<br />
          & educate.
        </h1>
      </div>
      <div>
        <slot></slot>
      </div>

      <div
        class="absolute top-0 right-0 w-3/4 sm:landing-person-img -translate-x-16 -translate-y-2/3"
      >
        <img src="@/assets/images/landing-person.svg" alt="Landing Person" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.heading-position-mobile {
  transform: translate(3rem, 6rem);
}

.heading-position {
  transform: translate(55%, 75%);
}

.landing-person-img {
  transform: translate(-10%, -70%);
}

.landing-person-img-mobile {
  width: 75%;
  transform: translate(-4rem, 65%);
}
</style>
