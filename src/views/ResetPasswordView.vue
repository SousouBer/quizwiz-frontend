<template>
  <layouts-auth-main>
    <LayoutsAuthImage
      class="bg-light-pink justify-center"
      srcLink="/images/reset-password-cover.svg"
    />
    <layouts-form>
      <layouts-input-and-label class="gap-4 mb-12">
        <heading-form>Reset password</heading-form>
        <span>Please, type something you'll remember.</span>
      </layouts-input-and-label>
      <form>
        <layouts-input-and-label class="mb-6">
          <label-base labelFor="new_password">New password</label-base>
          <inputBase
            inputType="password"
            inputName="new_password"
            inputId="new_password"
            inputPlaceholder="Must be 8 characters"
            :isPasswordInput="true"
          />
        </layouts-input-and-label>
        <layouts-input-and-label class="mb-6">
          <label-base style="color: #344054" labelFor="confirm_password"
            >Confirm password</label-base
          >
          <inputBase
            inputType="password"
            inputName="confirm_password"
            inputId="confirm_password"
            inputPlaceholder="Repeat password"
            :isPasswordInput="true"
          />
        </layouts-input-and-label>
        <button-submit>Reset password</button-submit>
      </form>
      <LinkAuthentication auth="login" link="/login" />
    </layouts-form>
  </layouts-auth-main>
</template>

<script>
import HeadingForm from "@/components/ui/form/HeadingForm.vue";
import LabelBase from "@/components/ui/form/LabelBase.vue";
import InputBase from "@/components/ui/form/InputBase.vue";
import ButtonSubmit from "@/components/ui/form/ButtonSubmit.vue";
import LinkAuthentication from "@/components/ui/form/LinkAuthentication.vue";
import LayoutsAuthImage from "@/components/layouts/LayoutsAuthImage.vue";
import LayoutsForm from "@/components/layouts/LayoutsForm.vue";
import LayoutsInputAndLabel from "@/components/layouts/LayoutsInputAndLabel.vue";
import LayoutsAuthMain from "@/components/layouts/LayoutsAuthMain.vue";

export default {
  components: {
    HeadingForm,
    InputBase,
    LabelBase,
    ButtonSubmit,
    LinkAuthentication,
    LayoutsAuthImage,
    LayoutsForm,
    LayoutsInputAndLabel,
    LayoutsAuthMain,
  },
};
</script>
