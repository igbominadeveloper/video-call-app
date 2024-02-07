<script setup lang="ts">
definePageMeta({
  name: 'Snapbyte',
  layout: 'sidebar',
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
