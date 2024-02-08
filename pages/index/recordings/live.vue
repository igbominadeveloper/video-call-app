<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
const { devices, permissions, requestPermission } = useMediaDevices();

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);

onMounted(() => {
  if (process.client) {
    requestPermission();
  }
});

watch(
  () => videoRef,
  (video) => {
    debugger;
    if (!video.value) return;
    if (!video.value.paused && !video.value.ended) {
      isPlaying.value = true;
    }
  }
);
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

      <div class="min-w-[965px] min-h-[518px] rounded-lg">
        <video
          id="video-stream"
          class="w-full h-full"
          ref="videoRef"
          v-show="isPlaying"
        />
        <div class="bg-darkblue w-full h-full" v-show="!isPlaying" />
      </div>
    </div>

    <basebutton type="primary" class="w-96 mt-10 mx-auto" shape="largestRound"
      >Start Recording</basebutton
    >
  </div>
</template>
