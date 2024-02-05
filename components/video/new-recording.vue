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

    <div class="flex flex-col mt-3 gap-4">
      <video-recording-control
        @selected="handleControl('screen')"
        :selected="screenSelected"
      />
      <video-recording-control
        @selected="handleControl('camera')"
        :selected="cameraSelected"
      />
      <video-recording-control
        @selected="handleControl('microphone')"
        :selected="microphoneSelected"
      />
    </div>
  </modal>
</template>
