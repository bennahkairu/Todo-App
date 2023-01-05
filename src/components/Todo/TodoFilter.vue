<template>
  <ul class="container mx-auto filter">
    <li
      v-for="(filter, i) in filters"
      :class="{ 'text-blue-100': filter === activeFilter }"
      :key="i"
      @click="filterTodo(filter)"
    >
      {{ filter }}
    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTodoListStore } from "../../stores/useTodoListStore";
const store = useTodoListStore();

const { activeFilter } = storeToRefs(store);
const filterTodo = (type) => (activeFilter.value = type);

const filters = ['all', 'active', 'completed']
// computed(() => {
  // const visible = ["all"];
  // if (active) visible.push("active");
  // if (completed) visible.push("completed");
  // return visible;
// });
</script>

<style>
ul.filter {
  @apply flex justify-center items-center gap-x-2 transition-colors text-gray-blue-800 dark:text-gray-blue-600 cursor-pointer capitalize md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 text-sm md:bg-transparent bg-white dark:bg-blue-500 md:mt-0 mt-4 py-3 rounded-md md:w-auto drop-shadow-2xl;
}
ul.filter > li:hover {
  @apply text-gray-blue-500 dark:text-gray-blue-200;
}
</style>