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

    <section class="flex items-center gap-3">
      <video-filters />
      <video-buttons />
    </section>
  </div>

  <div class="mt-11 mb-32">
    <!-- empty video call -->
    <video-empty v-if="false" />

    <!-- video list -->
    <video-list />
  </div>
</template>
