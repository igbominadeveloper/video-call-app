<script setup lang="ts"></script>

<template>
  <div
    class="min-h-dvh bg-white flex flex-col font-body border-x border-lightgray mx-auto"
  >
    <navbar />

    <div class="h-full flex flex-1 divide-x-2 divide-lightgray">
      <sidebar class="max-w-[290px] flex-1" />
      <main class="flex-1"></main>
    </div>
  </div>
</template>
