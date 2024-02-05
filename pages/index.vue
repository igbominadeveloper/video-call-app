<script setup lang="ts">
definePageMeta({
  name: 'Snapbyte',
  redirect() {
    return '/recordings';
  },
});

useHead({
  title: 'Snapbyte',
});
</script>

<template>
  <div>
    <nuxt-page />
  </div>
</template>
