<script setup lang="ts">
import { Control } from '~/enums';

const { permissions, handleControl } = useMediaDevices();

const screenSelected = computed(() => permissions.value.has(Control.Screen));
const cameraSelected = computed(() => permissions.value.has(Control.Video));
const microphoneSelected = computed(() => permissions.value.has(Control.Audio));

const control = { Screen: 'screen' };
console.log(control);

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
      />
      <video-recording-control
        title="Record camera"
        :selected="cameraSelected"
      />
      <video-recording-control
        title="Record microphone"
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
