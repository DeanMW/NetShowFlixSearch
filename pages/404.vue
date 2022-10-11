<template>
  <div class="flex justify-center">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <p class="text-gray-700 text-base mb-4">
        either the show you clicked on was not found or your search was not found. Please try again
      </p>
      <div class="flex space-x-2 justify-center">
        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" :onclick="() => navigateTo('/')">
          Go Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
console.log('404 page');
</script>
