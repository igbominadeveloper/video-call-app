<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
const {
  isStreaming,
  videoIsOn,
  devices,
  permissions,
  stopStream,
  requestPermissionForAudioAndVideo,
  // shareScreen,
} = useMediaDevices();

onMounted(() => {
  if (process.client) {
    // shareScreen();
    requestPermissionForAudioAndVideo();
  }
});

onBeforeRouteLeave(() => {
  stopStream();
});
</script>

<template>
  <div class="grid place-content-center my-12">
    <div class="flex flex-col gap-4">
      <header class="flex items-center gap-2">
        <Icon
          name="fluent:record-32-regular"
          class="size-4 animate-pulse text-darkred"
        />
        <span class="text-darkergray text-sm"> Live preview </span>
      </header>

      <div class="min-w-[965px] min-h-[518px] rounded-lg relative">
        <video
          height="518px"
          width="965px"
          id="video-stream"
          v-show="isStreaming && videoIsOn"
        />
        <div
          class="bg-darkblue w-full h-full absolute inset-0"
          v-show="isStreaming && !videoIsOn"
        />
      </div>
    </div>
    <video-feed-controls />
    <base-button type="primary" class="w-96 mt-10 mx-auto" shape="largestRound"
      >Start Recording</base-button
    >
  </div>
</template>
