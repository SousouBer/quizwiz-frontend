import instance from "@/plugins/axios/axios";

export async function login(payload) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post("/api/login", payload);
}

export async function register(payload) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post("/api/register", payload);
}

export async function ResendEmailVerificationLink(email) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post(`/api/resend-email-verification/${email}`);
}

export async function logout() {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post("/api/logout");
}

export async function verifyEmail(url) {
  await instance.get("sanctum/csrf-cookie");
  return await instance.get(`/api/verify-email/${url}`);
}

export async function forgotPassword(payload) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post("/api/forgot-password", payload);
}

export async function resetPassword(payload, email, token) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.post(`/api/reset-password/${email}/${token}`, payload);
}

export async function checkPasswordResetExpiration(email, token) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.get(
    `/api/reset-password/${email}/${token}/check-expiration`,
  );
}
