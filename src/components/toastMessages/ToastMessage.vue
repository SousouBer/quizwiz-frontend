<template>
  <div
    :class="{
      'border-green-600': this.result === 'success',
      'border-bright-yellow': this.result === 'verified',
      'border-red-500': this.result === 'expired',
    }"
    class="flex items-center p-3 gap-3 bg-charcoal-gray border-b-4 rounded-lg shadow-2xl"
  >
    <IconToastWarning :color="iconColor" />
    <div class="flex flex-col">
      <span class="text-white font-bold text-lg">{{ toastTitle }}</span>
      <span class="text-gray-300 text-sm">{{ toastDescription }}</span>
    </div>
  </div>
</template>

<script>
import IconToastWarning from "@/components/icons/IconToastWarning.vue";
export default {
  props: {
    result: {
      type: String,
      required: true,
    },
  },
  components: {
    IconToastWarning,
  },

  data() {
    return {
      toastTitle: "",
      toastDescription: "",
    };
  },

  computed: {
    iconColor() {
      if (this.result === "success") {
        return "#047857";
      } else if (this.result === "verified") {
        return "#FFD21F";
      } else if (this.result === "expired") {
        return "#DC2626";
      }

      return "#CBD5E0";
    },
  },

  watch: {
    result(newResult) {
      if (newResult === "success") {
        this.toastTitle = "Verification Successful";
        this.toastDescription =
          "You have successfully verified your E-mail. You can now log in!";
      } else if (newResult === "verified") {
        this.toastTitle = "Already Verified";
        this.toastDescription =
          "Your have already verified your E-mail. You can log in.";
      } else if (newResult === "expired") {
        this.toastTitle = "Token Expired";
        this.toastDescription =
          "Your E-mail verification link has expired. You can resend the link again below..";
      }
    },
  },
};
</script>
