<script setup lang="ts">
definePageMeta({
  name: 'Snapbyte',
  layout: 'sidebar',
  middleware: 'redirect',
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
