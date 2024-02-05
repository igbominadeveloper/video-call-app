<script setup lang="ts">
const model = defineModel();
const id = useId();
</script>

<template>
  <label :for="id" class="bg-lightestblue rounded-xl w-9 h-5">
    <input type="checkbox" :id="id" v-model="model" />
  </label>
</template>
