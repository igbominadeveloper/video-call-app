<script setup lang="ts">
import { Control } from '~/enums';

definePageMeta({
  layout: 'default',
});
const {
  isStreaming,
  videoIsOn,
  // deviceStates,
  toggleDeviceState,
  stopStream,
  requestPermissionForAudioAndVideo,
  shareScreen,
} = useMediaDevices();

onMounted(() => {
  if (process.client) {
    // shareScreen();
    requestPermissionForAudioAndVideo();
  }
});

const quitStream = () => useRouter().push({ name: 'My Recordings' });

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

      <div
        class="min-w-[965px] min-h-[518px] max-w-[965px] max-h-[518px] rounded-lg relative"
      >
        <video
          class="h-full w-full"
          id="video-stream"
          v-show="isStreaming && videoIsOn"
        />
        <div
          class="bg-darkblue w-full h-full absolute inset-0"
          v-show="isStreaming && !videoIsOn"
        />
      </div>
    </div>
    <video-feed-controls
      @quit="quitStream"
      @share-screen="shareScreen"
      @microphone="toggleDeviceState(Control.Audio)"
      @video="toggleDeviceState(Control.Video)"
    />
    <base-button type="primary" class="w-96 mt-10 mx-auto" shape="largestRound"
      >Start Recording</base-button
    >
  </div>
</template>
