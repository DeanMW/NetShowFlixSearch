<template>
  <div class="divide-y divide-slate-100">
    <show-list :genre="genre">
      <show-list-item v-for="show in showStore.sortedShowsByRating(shows)" :key="show.id" :show="show" />
    </show-list>
  </div>
</template>

<script setup lang="ts">
import { useShowStore } from '@/store/shows';
import { Show, Genre } from '@/types/show';

defineProps<{
  shows: Show[],
  genre: Genre,
}>();

const showStore = useShowStore();
</script>
