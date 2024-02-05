<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns';

defineProps<{
  recording: Recording;
}>();

const getSize = (sizeInBytes: number) => {
  //rough size calculation
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];

  for (const unit of units) {
    if (sizeInBytes < 1024) {
      return `${sizeInBytes.toFixed(2)} ${unit}`;
    }
    sizeInBytes /= 1024;
  }

  return `${sizeInBytes.toFixed(2)} ${units[units.length - 1]}`;
};

function formatDuration(durationInSeconds: number) {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  if (hours > 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
</script>

<template>
  <div class="relative w-32 h-16">
    <NuxtImg :src="recording.thumbnail" class="size-full rounded-md relative" />
    <span
      class="text-[11px] bg-lighterblue p-1.5 py-0.5 rounded text-white absolute bottom-1 right-1"
      >{{ formatDuration(recording.duration) }}</span
    >
  </div>
  <div class="flex flex-col justify-between gap-3">
    <p class="text-darkblue">{{ recording.title }}</p>
    <span class="text-lightestblue max-h-[35px] max-w-[224px]">{{
      recording.subTitle
    }}</span>
  </div>

  <p>{{ recording.views }}</p>
  <p>{{ getSize(recording.size) }}</p>
  <div class="col-span-2 flex">
    <p class="w-1/2">
      {{ formatDistanceToNow(recording.lastModified) }}
    </p>

    <basebutton
      class="border-0 p-0 h-0 hover:border-0 opacity-85 hover:opacity-100"
    >
      <Icon name="ph:dots-three-outline" size="28" />
    </basebutton>
  </div>
</template>
