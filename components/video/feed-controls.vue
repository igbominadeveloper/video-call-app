<script setup lang="ts">
const buttons = [
  { icon: 'mdi:microphone', color: 'text-white' },
  { icon: 'heroicons:video-camera', color: 'text-white' },
  { icon: 'ic:outline-screen-share', color: 'text-white' },
  { icon: 'material-symbols:call-end-sharp', color: 'text-red' },
];
</script>

<template>
  <div
    class="py-3 w-full relative bg-darkblue flex rounded-b-lg justify-center gap-6 items-center"
  >
    <base-button
      size="none"
      class="p-3 bg-darkergray hover:bg-lightblue border-none"
      shape="fullRound"
      v-for="button in buttons"
    >
      <Icon :name="button.icon" class="size-6" :class="button.color" />
    </base-button>
  </div>
</template>
