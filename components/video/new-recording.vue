<script setup lang="ts">
const { permissions, handleControl } = useMediaDevices();

const screenSelected = computed(() => permissions.value.has('screen'));
const cameraSelected = computed(() => permissions.value.has('video'));
const microphoneSelected = computed(() => permissions.value.has('audio'));

const error = useError();

const goLive = () => useRouter().push('/recordings/live');
</script>

<template>
  <base-modal>
    <template #title>New Recording</template>
    <p class="text-darkgray">Save the recording in</p>

    <div class="flex flex-col mt-5 gap-7">
      <video-recording-control
        title="Record screen"
        :selected="screenSelected"
        @selected="handleControl('screen')"
      />
      <video-recording-control
        title="Record camera"
        :selected="cameraSelected"
        @selected="handleControl('video')"
      />
      <video-recording-control
        title="Record microphone"
        @selected="handleControl('audio')"
        :selected="microphoneSelected"
      />
      <p class="my-2">{{ error?.message }}</p>

      <div class="flex flex-1 px-10 mt-5">
        <base-button
          type="primary"
          @click="goLive"
          class="flex-1"
          shape="largestRound"
          >Start Recording</base-button
        >
      </div>
    </div>
  </base-modal>
</template>
