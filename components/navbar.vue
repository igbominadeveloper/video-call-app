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
    class="h-[5rem] border-b border-b-lightgray grid grid-cols-[306px_4fr_1fr]"
  >
    <header class="flex gap-3 items-center pl-14">
      <div class="text-orange border-4 size-10 rounded-full" />
      <h1 class="text-darkblue font-bold text-2xl">Adilo</h1>
    </header>

    <nav>
      <ul class="flex gap-11 items-center h-full">
        <li
          v-for="link in links"
          :key="link.title"
          class="text-darkgray cursor-pointer flex items-center group h-full relative"
        >
          <span
            class="h-[0.3rem] absolute top-0 w-0 bg-[transparent] group-hover:w-full group-hover:bg-lightblue rounded-sm transition-all duration-300"
          ></span>
          <nuxt-link :title="link.title" :to="link.url">{{
            link.title
          }}</nuxt-link>

          <Icon
            name="material-symbols:keyboard-arrow-down"
            v-if="link.children?.length"
          />
        </li>
      </ul>
    </nav>

    <div>
      <nuxt-link>Help</nuxt-link>
    </div>
  </div>
</template>

<style scoped></style>
