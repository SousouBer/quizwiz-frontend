<template>
  <layouts-form>
    <template #imageContent>
      <div
        class="items-center justify-center bg-light-pink h-screen w-custom-45 hidden lg:flex"
      >
        <img
          src="@/assets/images/reset-password-cover.svg"
          alt="Reset Password Cover"
        />
      </div>
    </template>
    <template #default>
      <div class="flex flex-col gap-4 mb-12">
        <heading-form>Forgot password?</heading-form>
        <span
          >Don’t worry! It happens. Please enter the email associated<br />
          with your account.</span
        >
      </div>
      <form>
        <div class="flex flex-col mb-6">
          <label-base labelFor="email">Email address</label-base>
          <input-base
            inputType="email"
            inputName="email"
            inputId="email"
            inputPlaceholder="Enter your email address"
          ></input-base>
        </div>
        <button-submit>Send</button-submit>
      </form>
    </template>
  </layouts-form>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";

export default {
  components: {
    HeadingForm,
    ButtonSubmit,
    InputBase,
    LabelBase,
    LayoutsForm,
  },
};
</script>
