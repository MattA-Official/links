<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="container">
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/" class="button">Go Home</NuxtLink>
  </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.button {
    padding: 10px 20px;
    color: #00000081;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    transition: text-decoration 0.3s linear;
}

.button:hover, .button:focus {
    text-decoration: underline;
}
</style>
