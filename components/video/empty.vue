<script setup lang="ts"></script>

<template>
  <div
    class="mt-8 flex flex-col items-center justify-center border border-dashed border-lightestblue h-[563px] rounded-3xl"
  >
    <NuxtImg src="/media-file.png" class="w-[223px] h-[176px]" />

    <div class="flex flex-col gap-2 items-center mt-[55px]">
      <h1 class="text-xl">Say hello to the world!</h1>
      <p class="text-center text-darkergray text-sm">
        Record your first video/audio and share it what your team, friends,
        <br />followers and customers.
      </p>
    </div>

    <video-buttons class="mt-9 flex-row-reverse" />
  </div>

  <div class="mt-11 flex gap-[79px] items-center mb-36">
    <NuxtImg src="/screenshot.png" class="shadow-md max-w-[491px]" />

    <div class="flex flex-col gap-9">
      <p class="max-w-[378px] text-darkblue font-medium text-xl">
        Want more controls & better quality recording?
      </p>
      <basebutton class="max-w-[278px]" type="primary" shape="largestRound">
        Download the desktop recorder
      </basebutton>
    </div>
  </div>
</template>
