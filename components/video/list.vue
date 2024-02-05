<script setup lang="ts">
defineProps<{
  recordings: Recording[];
}>();
</script>
<template>
  <!-- table heading -->
  <video-table-row class="text-darkblue text-lg mb-9">
    <h1>Recordings</h1>
    <h1>Title</h1>
    <h1>Views</h1>
    <h1>Size</h1>
    <h1 class="col-span-2">Last Modified</h1>
  </video-table-row>

  <!-- table body -->
  <div class="divide-y-[32px] divide-[transparent]">
    <video-table-row
      class="text-darkblue text-sm"
      v-for="recording in recordings"
      :key="recording.title"
    >
      <video-recording :recording="recording" />
    </video-table-row>
  </div>
</template>
