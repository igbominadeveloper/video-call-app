<script setup lang="ts">
const props = defineProps<{
  selected: boolean;
  title: string;
}>();

const emit = defineEmits<{
  (e: 'selected', selected: boolean): void;
}>();

const selected = ref(props.selected);

watch(
  () => props.selected,
  (on: boolean) => {
    selected.value = on;
  }
);

watch(
  () => selected.value,
  (on: boolean) => {
    emit('selected', on);
  }
);
</script>

<template>
  <div class="flex items-center justify-between">
    <p class="text-darkblue font-medium">{{ title }}</p>
    <switch-toggle v-model="selected" />
  </div>
</template>
