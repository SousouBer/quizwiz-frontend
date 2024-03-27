<template>
  <main class="flex flex-row">
    <LayoutsAuthImage
      class="justify-center bg-light-pink"
      srcLink="/images/reset-password-cover.svg"
    />
    <layouts-form>
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
          <inputBase
            inputType="email"
            inputName="email"
            inputId="email"
            inputPlaceholder="Enter your email address"
          />
        </div>
        <button-submit>Send</button-submit>
      </form>
    </layouts-form>
  </main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";

export default {
  components: {
    HeadingForm,
    ButtonSubmit,
    InputBase,
    LabelBase,
    LayoutsForm,
    LayoutsAuthImage,
  },
};
</script>
