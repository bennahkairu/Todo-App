<template>
  <li class="todo-item" :key="element.id">
    <label class="checkbox" :class="`${element.completed ? 'completed' : ''}`">
      <div class="wrapper">
        <div class="input">
          <input type="checkbox" v-model="element.completed" />
          <span>
            <span></span>
          </span>
        </div>
        <span>{{ element.item }}</span>
      </div>
      <Cross class="complete" />
    </label>
  </li>
</template>

<script setup>
import { Cross } from "@/components/UIElements/Icons.vue";

defineProps(["element"]);
</script>

<style scoped>
.todo-item {
  @apply border-b transition-colors border-gray-blue-100 dark:border-gray-blue-500;
}
.todo-item > label {
  @apply transition-colors select-none cursor-pointer text-gray-blue-500 flex items-center py-4 px-6 dark:text-gray-blue-200 justify-between;
}
.todo-item > label > span {
  @apply transition-all;
}
.todo-item > label > span.completed {
  @apply line-through transition-colors text-gray-blue-200 dark:text-gray-blue-800;
}
</style>
