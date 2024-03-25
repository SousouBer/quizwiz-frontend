<template>
  <main class="flex flex-row">
    <div
      class="items-center justify-center bg-light-pink h-screen w-custom-45 hidden lg:flex"
    >
      <img
        src="@/assets/images/reset-password-cover.svg"
        alt="Reset Password Cover"
      />
    </div>
    <div class="p-4 sm:p-16 sm:pr-56 sm:pt-14 flex-grow">
      <link-back></link-back>
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
    </div>
  </main>
</template>

<script>
import LinkBack from "@/components/ui/links/LinkBack.vue";
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";

export default {
  components: {
    LinkBack,
    HeadingForm,
    InputBase,
    LabelBase,
    ButtonSubmit,
  },
};
</script>
