import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
  withXSRFToken: true,
});

instance.login = async function (payload) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post("/api/login", payload);
};

instance.register = async function (payload) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post("/api/register", payload);
};

instance.ResendEmailVerificationLink = async function (email) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post(`/api/resend-email-verification/${email}`);
};

instance.logout = async function () {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post("/api/logout");
};

instance.verifyEmail = async function (url) {
  await instance.get("sanctum/csrf-cookie");
  return await instance.get(`/api/verify-email/${url}`);
};

instance.forgotPassword = async function (payload) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post("/api/forgot-password", payload);
};

instance.resetPassword = async function (payload, email, token) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post(`/api/reset-password/${email}/${token}`, payload);
};

instance.checkPasswordResetExpiration = async function (email, token) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.get(
    `/api/reset-password/${email}/${token}/check-expiration`,
  );
};

export default instance;
