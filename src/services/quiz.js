import instance from "@/plugins/axios/axios";

export async function getCategories() {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.get("/api/categories");
}
