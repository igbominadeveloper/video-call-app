<script setup lang="ts">
const props = defineProps<{
  selected: boolean;
}>();

const emit = defineEmits<{
  (e: 'selected', selected: boolean): void;
}>();

const selected = ref(props.selected);

watch(
  () => props.selected,
  (on: boolean) => {
    selected.value = on;
    emit('selected', on);
  }
);
</script>

<template>
  <div class="flex items-center justify-between">
    <p class="text-darkblue font-medium">Record screen</p>
    <switch-toggle v-model="selected" />
  </div>
</template>
