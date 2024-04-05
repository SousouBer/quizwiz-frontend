<template>
  <div class="flex flex-col mb-4">
    <label class="text-sm text-charcoal font-normal pb-2" :for="name">{{
      label
    }}</label>
    <div class="relative">
      <Field
        :class="{ 'border-salmon-pink': error }"
        class="text-grayish-blue placeholder:text-grayish-blue text-base rounded-xl py-4 px-4.5 border w-full"
        :type="changeType"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :validateOnInput="true"
        :validateOnBlurr="false"
        :rules="rules"
        v-model="inputValue"
        @keyup="this.$emit('input-change', this.inputValue)"
      />
      <div
        class="cursor-pointer absolute right-0 top-1/2 transform -translate-x-full -translate-y-1/2"
        @click="togglePassword"
      >
        <IconEyeOpen v-if="isPassword && !showPassword" />
        <IconEyeClosed v-if="isPassword && showPassword" />
      </div>
    </div>
    <ErrorMessage :name="name" class="text-vivid-red text-sm pt-1" />
  </div>
</template>

<script>
import IconEyeOpen from "@/components/icons/IconEyeOpen.vue";
import IconEyeClosed from "@/components/icons/IconEyeClosed.vue";

import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    IconEyeOpen,
    IconEyeClosed,
    ErrorMessage,
    Field,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    isPassword: {
      type: Boolean,
      default: false,
      required: true,
    },
    rules: {
      type: String,
      required: true,
    },
    error: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  data() {
    return {
      showPassword: false,
      inputValue: "",
    };
  },

  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },

  computed: {
    changeType() {
      return this.isPassword
        ? this.showPassword
          ? "text"
          : "password"
        : this.type;
    },
  },
};
</script>
