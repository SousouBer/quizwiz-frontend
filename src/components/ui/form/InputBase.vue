<template>
  <div class="relative">
    <input
      class="text-grayish-blue placeholder:text-grayish-blue text-base rounded-xl py-4 px-4.5 border border-light-gray w-full"
      :type="changeInput"
      :id="inputId"
      :name="inputName"
      :placeholder="inputPlaceholder"
    />
    <div
      v-if="isPasswordInput"
      @click="showOrHidePassword"
      class="w-5 cursor-pointer absolute right-0 top-1/2 transform -translate-x-full -translate-y-1/2"
    >
      <img
        class="w-full h-full"
        src="../../../assets/images/icons/eye-open.svg"
        alt="Eye icon"
      />
    </div>
  </div>
</template>

<script>
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
  },

  data() {
    return {
      showPassword: false,
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
