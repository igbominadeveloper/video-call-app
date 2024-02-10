<script setup lang="ts">
const emit = defineEmits<{
  (e: 'new-request'): void;
  (e: 'go-live'): void;
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- filters -->
    <base-button
      type="primary"
      shape="largestRound"
      @click="emit('new-request')"
    >
      <Icon name="heroicons:video-camera" class="size-4" />New Request
    </base-button>

    <base-button type="danger" shape="largestRound" @click="emit('go-live')">
      <Icon name="ph:record" class="size-4 relative">
        <span class="text-black absolute">REC</span>
      </Icon>

      Start Recording
    </base-button>
  </div>
</template>
