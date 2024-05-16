<template>
  <div>
    <div class="flex flex-row items-center gap-3 relative mb-2">
      <Field
        class="w-5 h-5 input-checkbox"
        type="checkbox"
        :name="name"
        :rules="rules"
        :value="true"
        :uncheckedValue="false"
      />
      <IconTick
        width="15"
        height="15"
        class="pointer-events-none absolute hidden show-tick-icon top-0 left-0 transform translate-x-[3px] translate-y-1/3"
      />
      <label :for="name">{{ label }}</label>
    </div>
    <ErrorMessage :name="name" class="text-vivid-red text-sm" />
  </div>
</template>

<script>
import IconTick from "@/components/icons/IconTick.vue";
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Field,
    ErrorMessage,
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
    rules: {
      type: String,
      required: true,
    },
  },
};
</script>
