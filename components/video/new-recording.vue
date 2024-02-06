<script setup lang="ts">
type Control = 'microphone' | 'screen' | 'camera';
const permissions = ref<Map<Control, boolean>>(new Map());

const handleControl = (control: Control) => {
  const isSet = permissions.value.has(control);
  if (isSet) {
    permissions.value.delete(control);
    return;
  }

  permissions.value.set(control, true);
};

const screenSelected = computed(() => permissions.value.has('screen'));
const cameraSelected = computed(() => permissions.value.has('camera'));
const microphoneSelected = computed(() => permissions.value.has('microphone'));
</script>

<template>
  <modal>
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
        @selected="handleControl('camera')"
      />
      <video-recording-control
        title="Record microphone"
        @selected="handleControl('microphone')"
        :selected="microphoneSelected"
      />

      <div class="flex flex-1 px-10 mt-5">
        <basebutton type="primary" class="flex-1" shape="largestRound"
          >Start Recording</basebutton
        >
      </div>
    </div>
  </modal>
</template>
