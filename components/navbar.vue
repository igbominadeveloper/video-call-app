<script setup lang="ts">
type NavLinkBase = {
  title: string;
  url?: string;
};

type NavLink = NavLinkBase & {
  children?: NavLinkBase[];
};

const links: NavLink[] = [
  {
    title: 'Projects',
    url: '#',
  },
  {
    title: 'Tools & App',
    url: '#',
    children: [
      {
        title: 'Snapbyte Recorder',
        url: '#',
      },
      {
        title: 'AudioBounce',
        url: '#',
      },
      {
        title: 'Sugar Voice',
        url: '#',
      },
    ],
  },
  {
    title: 'Channels',
    url: '#',
  },
  {
    title: 'Contacts',
    url: '#',
  },
  {
    title: 'Analytics',
    url: '#',
  },
  {
    title: 'Settings',
    url: '#',
  },
];
</script>

<template>
  <div
    class="h-[5.5rem] border-b border-b-lightgray grid grid-cols-[306px_4fr_1fr]"
  >
    <header class="flex gap-3 items-center pl-14">
      <div class="text-orange border-4 size-10 rounded-full" />
      <h1 class="text-darkblue font-bold text-2xl">Adilo</h1>
    </header>

    <nav>
      <ul class="flex gap-11 items-center h-full">
        <li v-for="link in links" :key="link.title">
          <nuxt-link :title="link.title" :to="link.url">{{
            link.title
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
