<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns';

defineProps<{
  recording: Recording;
}>();
</script>

<template>
  <div class="relative w-32 h-16">
    <NuxtImg :src="recording.thumbnail" class="size-full rounded-md relative" />
    <span
      class="text-[11px] bg-lighterblue p-1.5 py-0.5 rounded text-white absolute bottom-1 right-1"
      >{{ formatVideoDuration(recording.duration) }}</span
    >
  </div>
  <div class="flex flex-col justify-between gap-3">
    <p class="text-darkblue">{{ recording.title }}</p>
    <span class="text-lightestblue max-h-[35px] max-w-[224px]">{{
      recording.subTitle
    }}</span>
  </div>

  <p>{{ recording.views }}</p>
  <p>{{ formatFileSize(recording.size) }}</p>
  <div class="col-span-2 flex">
    <p class="w-1/2">
      {{ formatDistanceToNow(recording.lastModified) }}
    </p>

    <base-button
      class="border-0 p-0 h-0 hover:border-0 opacity-85 hover:opacity-100"
    >
      <Icon name="ph:dots-three-outline" size="28" />
    </base-button>
  </div>
</template>
