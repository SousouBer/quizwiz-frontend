<template>
  <header class="flex justify-between items-center px-24 py-4 border-b">
    <div class="flex items-center gap-14">
      <div>
        <a href="#">
          <img
            src="/src/assets/images/quizwiz-header-logo.svg"
            alt="Quiz wiz Logo"
          />
        </a>
      </div>
      <a
        href="#"
        class="text-gray-500 font-semibold hover:text-gray-600 transition-colors duration-300 ease-in-out"
        >Quizzes</a
      >
    </div>
    <div class="flex justify-center items-center gap-1">
      <button
        class="text-white bg-black rounded px-6 py-3 text-sm font-bold hover:bg-gray-900 transition-colors duration-300 ease-in-out"
      >
        Sign up
      </button>
      <button
        class="text-blue-500 font-bold text-sm px-6 py-3 hover:text-blue-600 transition-colors duration-300 ease-in-out"
      >
        Log in
      </button>
    </div>
  </header>
</template>

<script>
export default {};
</script>
