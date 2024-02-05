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
</script>

<template>
  <NuxtImg :src="recording.thumbnail" class="w-32 h-16 rounded-md" />
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
