<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

const emit = defineEmits<{
  (e: 'close'): void;
}>();

let bodyOverflow = document.body.style.overflow;

const modalRef = ref(null);

onClickOutside(modalRef, () => emit('close'));

onMounted(() => {
  document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
  document.body.style.overflow = bodyOverflow;
  bodyOverflow = '';
});
</script>

<template>
  <div
    class="absolute min-h-dvh min-w-full inset-0 z-50 grid place-items-center"
  >
    <div class="bg-black opacity-40 w-full h-full absolute" />

    <div class="min-h-80 min-w-96 bg-white z-10 rounded-lg" ref="modalRef">
      <!-- modal header -->
      <header
        class="flex items-center justify-between w-full p-4 px-6 border-b border-b-lightgray"
      >
        <h1 class="text-lg text-darkblue font-bold">
          <slot name="title" />
        </h1>

        <button
          class="border-0 opacity-65 hover:opacity-100"
          @click="emit('close')"
        >
          <Icon name="ph:x" class="size-6" />
        </button>
      </header>

      <!-- modal body -->
      <div class="w-full p-4 px-6">
        <slot />
      </div>
    </div>
  </div>
</template>
