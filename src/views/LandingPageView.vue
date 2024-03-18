<template>
  <div>
    <the-header></the-header>
    <main class="relative overflow-hidden">
      <section class="px-24 pt-6 pb-32">
        <div>
          <img
            src="../assets/images/quizwiz-title.svg"
            alt="Quiz wiz Title Logo"
          />
        </div>
        <h2 class="text-4xl font-semibold text-gray-500">
          Play with us, Explore with us
        </h2>
      </section>
      <section class="px-24 bg-orange-500 flex flex-col py-14">
        <span class="text-8xl font-black text-white">200+</span>
        <h3 class="text-5xl font-black text-white">Quiz games</h3>
      </section>
      <section class="px-24 bg-blue-500 flex flex-col py-10">
        <span class="text-8xl font-black text-white">25+</span>
        <h3 class="text-5xl font-black text-white">Different genre</h3>
      </section>
      <div class="absolute bottom-0 right-0 transform translate-y-1/3">
        <div class="relative">
          <div class="absolute heading-position">
            <h1 class="text-white text-7xl font-bold leading-12">
              Our mission is<br />
              to entertain<br />
              & educate.
            </h1>
          </div>
          <img
            src="../assets/images/black-background.svg"
            alt="Black background"
          />
          <div class="absolute top-0 right-0 landing-person-img">
            <img
              src="../assets/images/landing-person.svg"
              alt="Landing Person"
            />
          </div>
        </div>
      </div>
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

<style scoped>
.heading-position {
  transform: translate(55%, 75%);
}
</style>
