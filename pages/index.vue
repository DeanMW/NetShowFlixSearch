<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>

        {{ counterStore.count }}

        <button @click="counterStore.increment">
            please click me
        </button>
    </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/store/counter';

const counterStore = useCounterStore();
</script>
    