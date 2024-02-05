<script setup lang="ts">
type Control = 'microphone' | 'screen' | 'camera';
const permissions = ref<Map<Control, boolean>>(new Map());

const handleControl = (control: Control) => {
  if (permissions.value.has(control)) {
    permissions.value.delete(control);
    return;
  }

  permissions.value.set(control, control);
};

const screenSelected = computed(() => permissions.value.has(''));
</script>

<template>
  <modal>
    <template #title>New Recording</template>
    <p class="text-darkgray">Save the recording in</p>

    <div class="flex flex-col mt-3 gap-4">
      <video-recording-control @selected="handleControl('screen')" />
      <video-recording-control @selected="handleControl('camera')" />
      <video-recording-control @selected="handleControl('microphone')" />
    </div>
  </modal>
</template>
