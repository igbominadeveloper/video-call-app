<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const props = withDefaults(
  defineProps<{
    open: boolean;
    dismissOnClickOutside?: boolean;
  }>(),
  {
    open: false,
    dismissOnClickOutside: true,
  }
);

let bodyOverflow = document.body.style.overflow;

const modalRef = ref(null);
const showModal = ref(props.open);

const closeModal = () => {
  showModal.value = false;
  emit('close');
};

if (props.dismissOnClickOutside) {
  onClickOutside(modalRef, closeModal);
}

const resetOverflow = () => {
  document.body.style.overflow = bodyOverflow;
  bodyOverflow = '';
};

onBeforeUnmount(() => {
  resetOverflow();
});

watch(
  () => props.open,
  (open: boolean) => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      resetOverflow();
    }
    showModal.value = open;
  }
);
</script>

<template>
  <transition
    enter-active-class="transition-all ease-in-out duration-300"
    leave-active-class="transition-all ease-in-out duration-300"
    enter-from-class="opacity-0 transform -translate-y-20"
    enter-to-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-20"
    appear
  >
    <div
      v-if="showModal"
      class="absolute min-h-dvh min-w-full inset-0 z-50 grid place-items-center"
    >
      <div class="bg-black opacity-40 w-full h-full absolute" />

      <div
        class="min-h-96 min-w-[28rem] bg-white z-10 rounded-lg"
        ref="modalRef"
      >
        <!-- modal header -->
        <header
          class="flex items-center justify-between w-full p-4 px-6 border-b border-b-lightgray"
        >
          <h1 class="text-lg text-darkblue font-bold">
            <slot name="title" />
          </h1>

          <button
            class="border-0 opacity-65 hover:opacity-100"
            @click="closeModal"
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
  </transition>
</template>
