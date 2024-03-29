<template>
  <div class="flex items-center gap-3">
    <label class="font-semibold" :for="labelFor">{{ labelFor }}</label>
    <div class="flex items-center relative">
      <input type="checkbox" v-model="isChecked" />
      <IconCheck
        @click="uncheckCheckbox"
        class="cursor-pointer hidden absolute show-tick-icon top-0 left-0 transform translate-x-1/3 translate-y-1"
      />
    </div>
  </div>
</template>

<script>
import IconCheck from "@/components/icons/IconCheck.vue";

export default {
  props: {
    labelFor: {
      type: String,
      required: true,
    },
  },

  components: {
    IconCheck,
  },

  data() {
    return {
      isChecked: false,
    };
  },

  methods: {
    uncheckCheckbox() {
      this.isChecked = false;
    },
  },
};
</script>

<style scoped>
@import "/src/assets/filterPanelModalCheckboxStyles.css";
</style>
