<script setup lang="ts">
const route = useRoute();

const breadcrumbs = computed(() =>
  route.matched.map((route) => ({
    label: route.name,
    to: route.path,
  }))
);
</script>

<template>
  <nav>
    <ul class="flex items-center gap-2">
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="breadcrumb.label"
        class="text-darkgray text-sm flex items-center gap-2"
      >
        <nuxt-link :to="breadcrumb.to">
          {{ breadcrumb.label }}
        </nuxt-link>

        <Icon
          name="material-symbols-light:chevron-right"
          v-if="breadcrumbs.length > 1 && index < breadcrumbs.length - 1"
        />
      </li>
    </ul>
  </nav>
</template>
