<template>
  <div>
    <div v-for="genre in showStore.genres" :key="genre">
      <shows :shows="showStore.sortedShowsByGenre(genre)" :genre="genre" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShowStore } from '@/store/shows';

definePageMeta({
  title: 'NetShowFlixSearch - Shows Overview'
});

const showStore = useShowStore();

showStore.fetchShows();
</script>
