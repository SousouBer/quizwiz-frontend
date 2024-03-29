<template>
  <layouts-auth-main>
    <LayoutsAuthImage
      class="justify-center bg-light-pink"
      srcLink="/images/reset-password-cover.svg"
    />
    <layouts-form>
      <layouts-input-and-label class="gap-4 mb-12">
        <heading-form>Forgot password?</heading-form>
        <span
          >Don’t worry! It happens. Please enter the email associated<br />
          with your account.</span
        >
      </layouts-input-and-label>
      <form>
        <layouts-input-and-label class="mb-6">
          <label-base labelFor="email">Email address</label-base>
          <inputBase
            inputType="email"
            inputName="email"
            inputId="email"
            inputPlaceholder="Enter your email address"
          />
        </layouts-input-and-label>
        <button-submit>Send</button-submit>
      </form>
    </layouts-form>
  </layouts-auth-main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import LayoutsInputAndLabel from "@/components/layouts/LayoutsInputAndLabel.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";

export default {
  components: {
    HeadingForm,
    ButtonSubmit,
    InputBase,
    LabelBase,
    LayoutsForm,
    LayoutsAuthImage,
    LayoutsInputAndLabel,
    LayoutsAuthMain,
  },
};
</script>
