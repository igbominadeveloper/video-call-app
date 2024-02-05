<template>
  <div class="flex items-center gap-2">
    <!-- filters -->
    <basebutton type="primary" shape="largestRound">
      <Icon name="heroicons:video-camera" class="size-4" />New Request
    </basebutton>

    <basebutton type="danger" shape="largestRound">
      <Icon name="ph:record" class="size-4 relative">
        <span class="text-black absolute">REC</span>
      </Icon>

      Start Recording
    </basebutton>
  </div>
</template>
