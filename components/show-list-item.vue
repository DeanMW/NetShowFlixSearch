<template>
  <div :id="`${show.id}-card`" class="card">
    <nuxt-link :to="`/${show.id}/show`">
      <div class="card__content">
        <div class="card__image">
          <img
            loading="lazy"
            :src="image"
            alt="title image for the specific show"
          >
        </div>
        <div class="card__body">
          <h5 class="card__title">
            {{ show.name }}
          </h5>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import placeholderImage from '@/assets/images/poster-placeholder.png';
import { Show } from '@/types/show';

const props = defineProps<{
  show: Show;
}>();

const image = computed(() => props.show.image ? props.show.image.medium : placeholderImage);
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
