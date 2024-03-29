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

<style scoped>
input[type="checkbox"] {
  appearance: none;
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  border-radius: 4px;
  border: 1px solid #d0d5dd;
}

input[type="checkbox"]:checked {
  background-color: #000;
}

input[type="checkbox"]:checked + .show-tick-icon {
  display: block;
}
</style>

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
