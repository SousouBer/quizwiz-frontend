import { defineRule } from "vee-validate";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return `This field is required`;
  }
  return true;
});

defineRule("requiredCheckbox", (value) => {
  if (!value) {
    return `You must agree to our terms and policy`;
  }
  return true;
});

defineRule("minLength", (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`;
  }
  return true;
});

defineRule("email", (value) => {
  if (!value || value.trim().length === 0) {
    return "Email is required";
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "Email must be a valid email";
  }

  return true;
});

defineRule("confirmed", (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }
  return "Passwords do not match. Try again.";
});
