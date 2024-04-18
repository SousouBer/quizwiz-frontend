<template>
  <div
    class="relative border border-gray-200 rounded-lg shadow-xl p-8 pt-12 w-96"
  >
    <span
      class="bg-white absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-12 py-3 rounded-lg border border-gray-200 shadow-sm font-semibold text-base text-gray-600"
      >Timer</span
    >
    <div class="pb-6 mb-8 border-b border-gray-300 px-20">
      <span id="countdown" class="text-gray-600 font-medium text-7xl"></span>
    </div>
    <button
      class="bg-saturated-blue transition-colors duration-300 hover:bg-blue-400 text-base font-semibold w-full text-white rounded-lg py-3"
    >
      Submit
    </button>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      required: true,
    },
  },
  methods: {
    countdown(minutes, seconds) {
      const countdownElement = document.getElementById("countdown");
      countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      if (minutes === 0 && seconds === 0) {
        countdownElement.textContent = "00:00";
        return;
      }

      setTimeout(() => {
        if (seconds === 0) {
          this.countdown(minutes - 1, 59);
        } else {
          this.countdown(minutes, seconds - 1);
        }
      }, 1000);
    },
  },

  // mounted() {
  //   this.countdown(this.duration, 0);
  // },
};
</script>
