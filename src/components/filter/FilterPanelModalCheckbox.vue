<template>
  <div class="flex items-center gap-3">
    <label class="font-semibold" :for="labelFor">{{ labelFor }}</label>
    <div class="flex items-center relative">
      <input :class="checkboxClass" type="checkbox" v-model="isChecked" />
      <IconCheck
        @click="uncheckCheckbox"
        :color="tickIconColor"
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

  computed: {
    checkboxClass() {
      return window.innerWidth <= 640
        ? "filter-checkbox-mobile"
        : "filter-checkbox";
    },

    tickIconColor() {
      return this.checkboxClass === "filter-checkbox-mobile"
        ? "#7F56D9"
        : "#fff";
    },
  },
};
</script>
