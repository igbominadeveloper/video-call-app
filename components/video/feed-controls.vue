<script setup lang="ts"></script>

<template>
  <div
    class="py-3 w-full relative bg-darkblue flex justify-center gap-6 items-center"
  >
    <base-button
      size="none"
      class="p-3 bg-darkergray hover:bg-lightblue border-none"
      shape="fullRound"
    >
      <Icon name="mdi:microphone" class="size-6 text-white" />
    </base-button>
    <base-button
      size="none"
      class="p-3 bg-darkergray hover:bg-lightblue border-none"
      shape="fullRound"
    >
      <Icon name="heroicons:video-camera" class="size-6 text-white" />
    </base-button>
    <base-button
      size="none"
      class="p-3 bg-darkergray hover:bg-lightblue border-none"
      shape="fullRound"
    >
      <Icon name="ic:outline-screen-share" class="size-6 text-white" />
    </base-button>
    <base-button
      size="none"
      class="p-3 bg-darkergray hover:bg-lightblue border-none"
      shape="fullRound"
    >
      <Icon name="material-symbols:call-end-sharp" class="size-6 text-red" />
    </base-button>
  </div>
</template>
