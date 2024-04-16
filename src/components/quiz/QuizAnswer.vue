<template>
  <div
    @click="toggleAnswer"
    :class="{ 'border-saturated-blue-40 bg-saturated-blue-10': isChecked }"
    class="cursor-pointer border rounded-lg flex justify-between items-center p-4"
  >
    <span :class="{ 'text-saturated-blue': isChecked }" class="text-gray-800"
      >Drug Manufacturing</span
    >
    <div class="relative">
      <input
        :class="{ 'border border-light-gray': !isChecked }"
        type="checkbox"
        name="option_1"
        id="id"
        class="answer-checkbox w-4 h-4"
        v-model="isChecked"
      />
      <IconTick
        class="hidden show-tick-icon absolute top-0 right-0 transform -translate-x-1 translate-y-1"
        height="10"
        width="8"
      />
    </div>
  </div>
</template>

<script>
import IconTick from "@/components/icons/IconTick.vue";

export default {
  components: {
    IconTick,
  },

  data() {
    return {
      isChecked: false,
    };
  },

  methods: {
    toggleAnswer() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>
