<template>
  <div class="flex flex-row items-center gap-3 relative">
    <Field
      class="w-5 h-5 input-checkbox"
      type="checkbox"
      :name="name"
      v-model="isChecked"
    />
    <IconTick
      width="15"
      height="15"
      class="cursor-pointer absolute hidden show-tick-icon top-0 left-0 transform translate-x-1/4 translate-y-1/3"
      @click="uncheckCheckbox"
    />
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script>
import IconTick from "@/components/icons/IconTick.vue";
import { Field } from "vee-validate";

export default {
  components: {
    Field,
    IconTick,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
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
