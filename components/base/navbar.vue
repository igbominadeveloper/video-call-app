<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

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

const activeMenuIndex = ref<number | null>(null);
const menuRef = ref<HTMLElement | null>(null);

const handleClick = (index: number | null) => {
  if (activeMenuIndex.value && index === activeMenuIndex.value) {
    activeMenuIndex.value = null;
    return false;
  }

  activeMenuIndex.value = index;
};

onClickOutside(menuRef, () => (activeMenuIndex.value = null));
</script>

<template>
  <div
    class="h-[5rem] border-b border-b-lightgray grid grid-cols-[306px_2fr_1fr]"
  >
    <header>
      <nuxt-link
        :to="{ name: 'Snapbyte' }"
        class="h-full flex gap-3 items-center pl-14"
      >
        <div
          class="bg-orange relative size-12 rounded-xl flex items-center justify-center"
        >
          <div class="rounded-full absolute size-8 bg-white"></div>
        </div>
        <h1 class="text-darkblue font-bold text-2xl">Adilo</h1>
      </nuxt-link>
    </header>

    <nav>
      <ul class="flex gap-11 items-center h-full">
        <li
          v-for="(link, index) in links"
          :key="link.title"
          class="text-darkgray cursor-pointer flex items-center group h-full relative"
          @click="handleClick(index)"
        >
          <span
            class="h-[0.3rem] absolute top-0 w-0 bg-[transparent] group-hover:w-full group-hover:bg-lighterblue rounded-sm transition-all duration-300"
          ></span>
          <nuxt-link
            :title="link.title"
            :to="link.url"
            class="cursor-pointer hover:text-lighterblue"
            >{{ link.title }}</nuxt-link
          >

          <template v-if="link.children?.length">
            <Icon
              v-if="activeMenuIndex === index"
              class="ml-1"
              name="material-symbols:keyboard-arrow-up"
            />
            <Icon
              class="ml-1"
              name="material-symbols:keyboard-arrow-down"
              v-else
            />

            <div
              class="border top-[4rem] z-20 border-lightgray divide-y divide-lightgray rounded-lg shadow-md absolute flex flex-col min-w-max bg-white"
              :class="{
                visible: activeMenuIndex === index,
                invisible: activeMenuIndex !== index,
              }"
            >
              <nuxt-link
                :title="childLink.title"
                :to="childLink.url"
                class="px-6 py-5 cursor-pointer hover:text-lighterblue"
                v-for="childLink in link.children"
                >{{ childLink.title }}</nuxt-link
              >
            </div>
          </template>
        </li>
      </ul>
    </nav>

    <div class="flex items-center w-full">
      <nuxt-link class="font-bold mr-4 pr-5 py-2 border-r border-darkblue/70"
        >Help</nuxt-link
      >

      <div class="flex items-center gap-3 pl-4 text-sm">
        <div class="size-12 rounded-lg bg-orange/50"></div>
        <div class="flex justify-between flex-col gap-2">
          <h1 class="font-bold">Cody Fisher</h1>
          <p class="text-darkgray/70 text-sm">cody.fisher@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
