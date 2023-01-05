<template>
  <form @submit.prevent="todoSubmit">
    <div class="input-wrapper">
      <label class="checkbox">
        <div class="input">
          <input type="checkbox" v-model="todo.completed" />
          <span>
            <span></span>
          </span>
        </div>
      </label>
      <input
        type="text"
        v-model="todo.item"
        placeholder="Create a new todo..."
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/useTodoListStore";

const todo = ref({ completed: false, item: "" });
const store = useTodoListStore();
const todoSubmit = () => {
  if (todo.value.item.trim().length === 0) {
    return;
  }
  store.addTodo(todo.value);
  todo.value = { completed: false, item: "" };
};
</script>

<style scoped>
.input-wrapper {
  @apply py-4 px-6 rounded-md flex items-center transition-colors bg-white dark:bg-blue-500;
}
form input[type="text"] {
  @apply flex-1 px-2 bg-transparent transition-colors text-gray-blue-500 dark:text-gray-blue-200 placeholder:text-gray-blue-600 dark:placeholder:text-gray-blue-800;
}
</style>
