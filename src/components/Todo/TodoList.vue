<template>
  <div class="relative">
    <div class="todolist">
      <div v-if="!isEmpty">
        <Sortable
          :list="getTodos"
          itemKey="id"
          tag="ul"
          @end="(e) => reorderTodo(e.oldIndex, e.newIndex)"
        >
          <template #item="{ element, index }">
            <TodoItem :element="element" :index="index" />
          </template>
        </Sortable>
      </div>
      <div v-else class="text-center py-12">
        <h6 class="text-gray-blue-600 mb-6">Start Doing!</h6>
        <picture>
          <source
            srcset="../../assets/images/empty.svg"
            media="(prefers-color-scheme: dark)"
          />
          <img
            class="w-44 mx-auto opacity-50"
            src="../../assets/images/empty.svg"
            alt="Your list is empty"
          />
        </picture>
      </div>

      <div class="footer">
        <span>{{
          `${active.length > 0 ? active.length : "No"} item${
            active.length === 0 || active.length > 1 ? "s" : ""
          } left`
        }}</span>
        <button @click="clearCompleted">Clear completed</button>
      </div>
    </div>
    <TodoFilter />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import TodoItem from "./TodoItem.vue";
import TodoFilter from "./TodoFilter.vue";
import { Sortable } from "sortablejs-vue3";
import { useTodoListStore } from "../../stores/useTodoListStore";

const store = useTodoListStore();
const {
  allTodos: todos,
  activeTodos: active,
  activeFilter,
  isEmpty,
} = storeToRefs(store);
const { reorderTodo, clearCompleted } = store;

const getTodos = computed(() => {
  if (activeFilter.value === "all") {
    return todos.value;
  }
  return todos.value.filter(
    (item) =>
      item.completed === (activeFilter.value === "completed" ? true : false)
  );
});
</script>

<style scoped>
.todolist {
  @apply mt-6 rounded-md drop-shadow-2xl transition-colors bg-white dark:bg-blue-500;
}
.todolist > .footer {
  @apply px-6 text-sm transition-colors py-4 text-gray-blue-600 dark:text-gray-blue-800 flex items-center justify-between font-medium;
}
.todolist > .footer > button:hover {
  @apply text-gray-blue-500 dark:text-gray-blue-200;
}
</style>
