<script setup lang="ts">
type NavLink = {
  title: string;
  url?: string;
  iconName: string;
};

const links: NavLink[] = [
  {
    title: 'My Recordings',
    url: 'recordings',
    iconName: 'et:video',
  },
  {
    title: 'Requested',
    url: 'requested',
    iconName: 'ph:share-network',
  },
];
</script>

<template>
  <nav class="bg-lightergray">
    <ul class="flex flex-col pt-9 px-4 gap-7">
      <li
        v-for="link in links"
        :key="link.title"
        class="hover:bg-lightgray border border-[transparent] hover:border-lightblue rounded-xl transition-all duration-200"
      >
        <nuxt-link
          :to="link.url"
          class="flex px-10 py-4 items-center gap-4 text-darkblue font-normal text-base"
        >
          <Icon :name="link.iconName" class="w-[26px] h-[21px]" />
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  @apply bg-lightgray border border-lightblue rounded-xl;
}
</style>
