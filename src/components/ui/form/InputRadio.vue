<template>
  <div class="flex flex-row gap-3 my-6">
    <input class="w-5 h-5" type="radio" :id="identifier" :name="identifier" />
    <label :for="identifier">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    identifier: {
      type: String,
      required: true,
    },
  },
};
</script>
