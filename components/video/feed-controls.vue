<script setup lang="ts">
const emit = defineEmits<{
  microphone: [];
  video: [];
  shareScreen: [];
  quit: [];
}>();
const buttons = [
  { icon: 'mdi:microphone', color: 'text-white', action: emit('microphone') },
  {
    icon: 'heroicons:video-camera',
    color: 'text-white',
    action: () => emit('video'),
  },
  {
    icon: 'ic:outline-screen-share',
    color: 'text-white',
    action: () => emit('shareScreen'),
  },
  {
    icon: 'material-symbols:call-end-sharp',
    color: 'text-red',
    action: () => emit('quit'),
  },
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
      @click="button.action"
    >
      <Icon :name="button.icon" class="size-6" :class="button.color" />
    </base-button>
  </div>
</template>
