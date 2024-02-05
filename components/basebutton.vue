<script setup lang="ts">
type Size = 'md' | 'lg';
type Shape =
  | 'flat'
  | 'smallRound'
  | 'largeRound'
  | 'largestRound'
  | 'fullRound';
type ButtonType = 'primary' | 'secondary' | 'danger';

const props = withDefaults(
  defineProps<{
    size?: Size;
    shape?: Shape;
    type?: ButtonType;
  }>(),
  {
    size: 'md',
    shape: 'flat',
    type: 'secondary',
    textColor: 'black',
  }
);

const sizeMap = new Map<Size, string>([
  ['md', 'py-3 px-6 text-sm'],
  ['lg', 'py-5 px-8 text-lg'],
]);

const typeMap = new Map<ButtonType, string>([
  ['primary', 'bg-lighterblue'],
  ['secondary', 'bg-transparent'],
  ['danger', 'bg-red'],
]);

const shapeMap = new Map<Shape, string | undefined>([
  ['flat', undefined],
  ['smallRound', 'rounded-lg'],
  ['largeRound', 'rounded-xl'],
  ['largestRound', 'rounded-3xl'],
  ['fullRound', 'rounded-full'],
]);

const textClass = computed(() => {
  if (props.type === 'secondary')
    return 'text-darkgray hover:border hover:border-darkgray';
  return 'text-white opacity-80 hover:opacity-100';
});

const borderClass = computed(() => {
  if (props.type === 'secondary') return 'border border-lightgray';
  return undefined;
});

const classList = computed(
  () =>
    `${sizeMap.get(props.size)} ${typeMap.get(props.type)} ${shapeMap.get(
      props.shape
    )} ${textClass.value} ${borderClass.value}`
);
</script>

<template>
  <button
    :class="classList"
    class="flex items-center justify-center gap-3 font-thin"
  >
    <slot />
  </button>
</template>
