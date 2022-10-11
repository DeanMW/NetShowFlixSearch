<template>
  <div :id="`${show.id}-card`" class="card">
    <NuxtLink :to="`${show.id}/show`">
      <div class="card__content">
        <div class="card__image">
          <img loading="lazy" :src="show.image.medium" alt="title image for the specific show">
        </div>
        <div class="card__body">
          <h5 class="card__title">
            {{ show.name }}
          </h5>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Show } from '@/types/show';

defineProps<{
  show: Show,
}>();

</script>

<style lang="scss">
.card {
  display: flex;
  justify-content: center;

  margin: 5px;
  border: 1px solid black;

  min-width: 150px;
  max-width: 150px;

  height: 300px;

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__body {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }
}
</style>
