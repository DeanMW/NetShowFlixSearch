<template>
  <div>
    <div v-if="isLoading" class="flex justify-center items-center">
      <div class="animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span class="visually-hidden">.</span>
      </div>
    </div>

    <div v-if="showStore.searchedShows.length">
      <h3 class="flex justify-center text-3xl font-bold mb-8">
        {{ $route.params.showname }}
      </h3>

      <div class="searched-items flex justify-center flex-wrap">
        <show-list-item v-for="searchedShow in showStore.searchedShows" :key="searchedShow.show.id" :show="searchedShow.show" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShowStore } from '@/store/shows';

const route = useRoute();
const showStore = useShowStore();

const isLoading = computed(() => showStore.isLoading);

if (route.params.showname) {
  showStore.fetchSearchedShows(route.params.showname as string);
} else {
  // redirect to index if there is no show searched but the user
  // has navigated to this page.
  await navigateTo('/');
}

watch(isLoading, async (loading) => {
  if (!loading && !showStore.searchedShows.length) {
    await navigateTo('/404');
  }
});
</script>
