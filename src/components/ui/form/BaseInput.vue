<template>
  <input
    :type="inputType"
    :id="inputId"
    :name="inputName"
    :placeholder="inputPlaceholder"
  />
</template>

<script>
export default {
  props: {
    inputType: String,
    inputId: String,
    inputName: String,
    inputPlaceholder: String,
  },
};
</script>
