<template>
  <ul class="divide-y divide-slate-100">
    <h1>{{ Genre }}</h1>
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { Genre } from '@/types/show';

defineProps<{
  genre: Genre,
}>();
</script>
