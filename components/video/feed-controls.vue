<script setup lang="ts">
import { Control, DeviceStatus } from '~/enums';

enum Action {
  'microphone' = 'microphone',
  'video' = 'video',
  'shareScreen' = 'shareScreen',
  'quit' = 'quit',
}

const { deviceStates } = useMediaDevices();

const emit = defineEmits<{
  microphone: [];
  video: [];
  shareScreen: [];
  quit: [];
}>();

type Button = {
  icons: Record<DeviceStatus, { name: string; color: string }>;
  name: Control;
  action: Action;
};
const buttons: Button[] = [
  {
    name: Control.Audio,
    icons: {
      [DeviceStatus.Off]: { name: 'mdi:microphone-off', color: 'text-red' },
      [DeviceStatus.On]: {
        name: 'mdi:microphone',
        color: 'text-white',
      },
      [DeviceStatus.Blocked]: { name: 'mdi:microphone', color: 'text-white' },
    },
    action: Action.microphone,
  },
  {
    name: Control.Video,
    icons: {
      [DeviceStatus.Off]: {
        name: 'heroicons:video-camera-slash',
        color: 'text-red',
      },
      [DeviceStatus.On]: {
        name: 'heroicons:video-camera',
        color: 'text-white',
      },
      [DeviceStatus.Blocked]: { name: 'mdi:microphone', color: 'text-white' },
    },
    action: Action.video,
  },
  {
    name: Control.Screen,
    icons: {
      [DeviceStatus.Off]: {
        name: 'ic:outline-screen-share',
        color: 'text-red',
      },
      [DeviceStatus.On]: {
        name: 'ic:outline-screen-share',
        color: 'text-white',
      },
      [DeviceStatus.Blocked]: {
        name: 'ic:outline-screen-share',
        color: 'text-white',
      },
    },
    action: Action.shareScreen,
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
      @click="handleClick(button.action)"
    >
      <Icon
        :name="button.icons[deviceStates[button.name]].name"
        class="size-6"
        :class="button.icons[deviceStates[button.name]].color"
      />
    </base-button>
  </div>
</template>
