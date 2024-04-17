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
      <Input
        @change="toggleAnswer"
        :class="{ 'border border-light-gray': !isChecked }"
        class="answer-checkbox w-4 h-4"
        type="checkbox"
        :name="name"
        :id="id"
        v-model="isChecked"
        @click.stop
      />
      <IconTick
        @click="toggleAnswer"
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

  props: {
    name: {
      type: String,
      default: "answer",
      required: true,
    },
    id: {
      type: String,
      default: "1",
      required: true,
    },
  },

  data() {
    return {
      isChecked: false,
    };
  },

  methods: {
    toggleAnswer() {
      console.log(this.isChecked);
      this.isChecked = !this.isChecked;
    },
  },
};
</script>
