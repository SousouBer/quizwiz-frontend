import instance from "@/plugins/axios/axios";

export async function categories(payload) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.get("/api/categories", payload);
}
