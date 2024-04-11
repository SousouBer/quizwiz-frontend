<template>
  <div class="px-24 my-8">
    <LinkBack />
    <div class="flex gap-8 border-b pb-16 mb-4">
      <div>
        <h1 class="text-4xl font-bold">Timeline of Discoveries</h1>
        <div class="flex gap-8 my-6">
          <span class="text-saturated-blue font-semibold">Geography</span>
          <span class="text-saturated-blue font-semibold">World</span>
        </div>
        <span
          >Can you put the discoveries in order, from the oldest to the newest
          one? 🧠</span
        >
        <div class="flex gap-8 items-center my-10">
          <div class="flex gap-1 items-center justify-center">
            <IconHash />
            <span class="text-medium-dark-gray font-semibold select-none"
              >10 Questions</span
            >
          </div>
          <div class="flex gap-1 items-center justify-center">
            <IconPoints />
            <span class="text-medium-dark-gray font-semibold select-none"
              >15 Points</span
            >
          </div>
          <div class="flex gap-1 items-center justify-center">
            <IconCount />
            <span class="text-medium-dark-gray font-semibold select-none"
              >150 Plays</span
            >
          </div>
          <div class="flex gap-1 items-center justify-center">
            <IconTime />
            <span class="text-medium-dark-gray font-semibold select-none"
              >5m</span
            >
          </div>
        </div>
        <button
          class="bg-saturated-blue transition-colors duration-300 hover:bg-blue-500 px-32 text-white py-3 rounded-lg text-base font-semibold"
        >
          Start quizz
        </button>
      </div>
      <div class="w-80">
        <img
          class="w-full h-full"
          src="@/assets/images/man-in-space.svg"
          alt="Man in space"
        />
      </div>
    </div>
    <span class="font-bold text-lg">Instructions</span>
    <p class="mt-1">
      Lorem ipsum dolor sit amet consectetur. Sed elementum nec id at placerat
      turpis. Etiam nisl nisi sed mus id maecenas mauris mattis.
    </p>
  </div>
  <TheFooter />
</template>

<script>
import TheFooter from "@/components/shared/TheFooter.vue";
import LinkBack from "@/components/shared/LinkBack.vue";
import IconHash from "@/components/icons/IconHash.vue";
import IconPoints from "@/components/icons/IconPoints.vue";
import IconTime from "@/components/icons/IconTime.vue";
import IconCount from "@/components/icons/IconCount.vue";

export default {
  components: {
    TheFooter,
    LinkBack,
    IconHash,
    IconPoints,
    IconCount,
    IconTime,
  },
};
</script>
