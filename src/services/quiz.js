import instance from "@/plugins/axios/axios";

export async function getCategories() {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.get("/api/categories");
}

export async function getLevels() {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.get("/api/difficulty-levels");
}

export async function getQuizzes() {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.get("/api/quizzes");
}

export async function getQuiz(id) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.get(`/api/quiz/${id}`);
}

export async function sendAnswers(answers) {
  await instance.get("/sanctum/csrf-cookie");
  return await instance.get("/api/answers", answers);
}
