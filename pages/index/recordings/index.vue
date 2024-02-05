<script setup lang="ts">
definePageMeta({
  name: 'My Recordings',
});

const title = 'My Recordings';
const videoCount = 25;

useHead({
  title,
});
</script>

<template>
  <div class="flex items-center justify-between">
    <section class="flex gap-4 items-center">
      <pagetitle :title="title" />
      <p class="text-darkgray text-[24px]">{{ videoCount }}</p>
    </section>

    <section>
      <video-filters />
    </section>
  </div>
</template>
