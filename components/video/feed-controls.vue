<script setup lang="ts">
enum Action {
  'microphone' = 'microphone',
  'video' = 'video',
  'shareScreen' = 'shareScreen',
  'quit' = 'quit',
}

const emit = defineEmits<{
  microphone: [];
  video: [];
  shareScreen: [];
  quit: [];
}>();
const buttons = [
  { icon: 'mdi:microphone', color: 'text-white', name: Action.microphone },
  {
    icon: 'heroicons:video-camera',
    color: 'text-white',
    name: Action.video,
  },
  {
    icon: 'ic:outline-screen-share',
    color: 'text-white',
    name: Action.shareScreen,
  },
  {
    icon: 'material-symbols:call-end-sharp',
    color: 'text-red',
    name: Action.quit,
  },
];

const handleClick = (action: Action) => {
  emit(action as string);
};
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
      @click="handleClick(button.name)"
    >
      <Icon :name="button.icon" class="size-6" :class="button.color" />
    </base-button>
  </div>
</template>
