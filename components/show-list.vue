<template>
  <div class="genre">
    <div v-if="genre" class="genre__header">
      <h1>{{ genre }}</h1>
    </div>
    <div class="genre__scroll-container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Genre } from '@/types/show';

defineProps<{
  genre?: Genre,
}>();
</script>

<style lang="scss">
.genre {
  &__header {
    padding: 10px;
    background-color:rgba(0,0,0,0.2);
    color: black;
    text-align: center;
    font-weight: 600;
  }

  &__scroll-container {
    display: flex;
    flex-direction: row;

    height: 350px;
    margin: 25px 0 25px 0;

    overflow: auto;
  }
}

</style>
