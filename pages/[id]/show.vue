<template>
  <div>
    <div class="flex space-x-2 justify-center">
      <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" :onclick="redirectHome">
        Go Home
      </button>
    </div>

    <div v-if="show" class="m-10 border p-5">
      <div class="show__image-container flex justify-center">
        <img class="show__image--desktop" :src="show.image?.original" alt="selected show bannner image">
        <img class="show__image--mobile" :src="show.image?.medium" alt="selected show bannner image">
      </div>

      <div class="flex justify-center p-5">
        <h3 class="flex justify-center text-3xl font-bold mb-8">
          {{ show.name }}
        </h3>
      </div>

      <div class="show__summary">
        <p v-html="show.summary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShowStore } from '@/store/shows';
import { Show } from '@/types/show';

definePageMeta({
  title: 'NetShowFlixSearch - Show Details'
});

const route = useRoute();
const showStore = useShowStore();
const show = computed(() => showStore.show);

if (route.params.id) {
  // make sure typing is correct so typescript is happy.
  const showId: number = parseInt(route.params.id as string);

  showStore.fetchSelectedShow(showId);
}

const redirectHome = async () => {
  await navigateTo('/');

  showStore.show = {} as Show;
};
</script>

<style lang="scss">
  .show__image-container {
    width: 100%;
    height: 400px;
    background-color: black;
  }

  .show__image {
    &--desktop {
      @media (max-width: 768px) {
        display: none;
      }
    }

    &--mobile {
      @media (min-width: 768px) {
        display:none;
      }
    }
  }
</style>
