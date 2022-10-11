<template>
  <div>
    <div class="flex space-x-2 justify-center">
      <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" :onclick="redirectHome">
        Go Home
      </button>
    </div>

    <p> {{ $route.params.id }}</p>

    <hr>

    <div>
      {{ showStore.show }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShowStore } from '@/store/shows';

definePageMeta({
  title: 'NetShowFlixSearch - Show Details'
});

const route = useRoute();
const showStore = useShowStore();

if (route.params.id) {
  console.log('this is the shows id:', route.params.id);

  // make sure typing is correct so typescript is happy.
  const showId: number = parseInt(route.params.id as string);

  showStore.fetchSelectedShow(showId);
} else {
  console.log('no id was found');
}

const redirectHome = async () => {
  console.log('redirecting to home');
  showStore.$patch({ show: {} });

  await navigateTo('/');
};
</script>
