<template>
  <header class="relative">
    <picture>
      <!-- <source
        srcset="../../assets/images/bg-desktop-dark.jpg"
        media="(prefers-color-scheme: dark)"
      /> -->
      <source media="(max-width: 600px)" :srcset="getSrc(`BG-MOBILE-${isDark ? 'DARK' : 'LIGHT'}.JPG`)" />
      <source media="(min-width: 600px)" :srcset="getSrc(`bg-desktop-${isDark ? 'dark' : 'light'}.jpg`)" />
      <img
        class="absolute h-96 w-full z-0"
        :src="getSrc(`bg-desktop-${isDark ? 'dark' : 'light'}.jpg`)"
        alt="Ambient Background"
      />
    </picture>

    <div class="container relative z-10 md:pt-32 pt-16 md:mb-16 mb-10">
      <div class="flex justify-between items-center">
        <img class="w-36" :src="getSrc('logo.svg')" alt="Todo" />
        <ThemeToggle @click="toggleDark()" :darkTheme="isDark" />
      </div>
    </div>
  </header>

  <main class="container relative z-10">
    <slot></slot>
  </main>

  <footer class="container relative z-10 mt-6 py-6">
    <h6 class="text-center text-sm font-medium text-gray-blue-600 dark:text-gray-blue-800">Drag and drop to reorder list</h6>
  </footer>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import ThemeToggle from "../UIElements/ThemeToggle.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const getSrc = (name) =>
  new URL(`../../assets/images/${name}`, import.meta.url).href;
</script>
