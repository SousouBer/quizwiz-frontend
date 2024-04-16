<template>
  <div>
    <div class="flex items-center gap-6 mb-4">
      <div class="relative">
        <span class="text-saturated-blue font-semibold">Question - 1</span>
        <IconMiddleLine
          color="gray"
          class="absolute top-0 right-0 transform translate-y-1/3 translate-x-3"
        />
      </div>
      <span class="text-pinkish-mangeta font-semibold">Points - 2</span>
    </div>
    <span class="font-bold text-lg"
      >What is the study of medicines and their action called?</span
    >
    <div @click="toggleAnswer" class="cursor-pointer">
      <div
        :class="{ 'border-saturated-blue-40 bg-saturated-blue-10': isChecked }"
        class="border border-red rounded-lg flex justify-between items-center p-4"
      >
        <span
          :class="{ 'text-saturated-blue': isChecked }"
          class="text-gray-800"
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
    </div>
  </div>
</template>

<script>
import IconMiddleLine from "@/components/icons/IconMiddleLine.vue";
import IconTick from "@/components/icons/IconTick.vue";

export default {
  components: {
    IconMiddleLine,
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
