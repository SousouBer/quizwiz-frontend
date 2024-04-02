<template>
  <div class="flex flex-row items-center gap-3 my-6 relative">
    <input
      class="w-5 h-5 input-radio"
      type="radio"
      :id="identifier"
      :name="identifier"
    />
    <IconTick
      width="15"
      height="15"
      class="cursor-pointer absolute hidden show-tick-icon top-0 left-0 transform translate-x-1/4 translate-y-1/3"
      @click="uncheckCheckbox"
    />
    <label :for="identifier">{{ label }}</label>
  </div>
</template>

<script>
import IconTick from "@/components/icons/IconTick.vue";

export default {
  components: {
    IconTick,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    identifier: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isChecked: false,
    };
  },

  methods: {
    uncheckCheckbox() {
      this.isChecked = false;
    },
  },
};
</script>
