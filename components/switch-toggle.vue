<script setup lang="ts">
const model = defineModel<boolean>();
const id = useId();
</script>

<template>
  <label
    :for="id"
    class="cursor-pointer rounded-xl w-[37px] h-5 relative flex items-center transition-all duration-300"
    :class="{
      'bg-green': model,
      'bg-lightestblue': !model,
    }"
  >
    <div
      class="size-4 rounded-full bg-white flex ml-[0.15rem] items-center transition-all duration-300"
      :class="{
        'translate-x-full': model,
      }"
    >
      <Icon name="ion:ios-checkmark" class="text-green" v-show="model" />
    </div>
    <input type="checkbox" :id="id" v-model="model" class="hidden" />
  </label>
</template>
