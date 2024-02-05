<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <h1 class="text-[24px] text-black">{{ title }}</h1>
</template>
