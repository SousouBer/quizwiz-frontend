<template>
  <div class="relative">
    <Field
      ref="input"
      class="text-grayish-blue placeholder:text-grayish-blue text-base rounded-xl py-4 px-4.5 border w-full"
      :type="changeInput"
      :id="inputId"
      :name="inputName"
      :placeholder="inputPlaceholder"
      :rules="rules"
    />
    <ErrorMessage :name="inputName" />
    <div
      v-if="isPasswordInput"
      @click="showOrHidePassword"
      class="w-5 cursor-pointer absolute right-0 top-1/2 transform -translate-x-full -translate-y-1/2"
    >
      <!-- <img
        class="w-full h-full"
        src="@/assets/images/icons/eye-open.svg"
        alt="Eye icon"
      /> -->
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  props: {
    inputType: String,
    inputId: String,
    inputName: String,
    inputPlaceholder: String,
    isPasswordInput: {
      type: Boolean,
      default: false,
    },
    rules: {
      // type: Function,
      required: true,
    },
  },

  components: {
    ErrorMessage,
    Field,
  },

  data() {
    return {
      showPassword: false,
      myMeta: null,
    };
  },

  methods: {
    showOrHidePassword() {
      this.showPassword = !this.showPassword;
    },
  },

  computed: {
    changeInput() {
      return this.isPasswordInput
        ? this.showPassword
          ? "text"
          : "password"
        : this.inputType;
    },
  },
};
</script>
