<template>
  <div>
    <div v-for="genre in showStore.genres" :key="genre">
      <shows :shows="showStore.sortedShowsByGenre(genre)" :genre="genre" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShowStore } from '@/store/shows';
import { Show } from '@/types/show';
const showStore = useShowStore();

// Get first 250 shows from the API.
// Easiest way to do it without backend, without this we have to store all of the shows
// and then filter on every show available in the API by genre
const { data } = await useFetch('https://api.tvmaze.com/shows');

// TODO: validate this first? Error types?
const allShows = data.value as Show[];

// Sort the shows so they are sorted from most viewed/rated to least viewed/rated (according to API)
const sortedShows = allShows.sort((a, b) => a.weight > b.weight ? -1 : 1);

// Set the sorted shows in the store
showStore.$patch({ shows: sortedShows });
</script>
