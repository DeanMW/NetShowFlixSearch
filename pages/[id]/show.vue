<template>
  <div>
    <button class="button" :onclick="redirectHome">
      Go Back
    </button>

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
