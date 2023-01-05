<template>
  <div>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm  from './TodoForm.vue'
import TodoList  from './TodoList.vue'
</script>

<style>
.checkbox > .wrapper {
  @apply flex items-center
}
.checkbox .input {
  @apply relative mr-5 h-6 w-6 cursor-pointer
}

.checkbox .input > input {
  @apply absolute opacity-0;
}

.checkbox .input > span {
  @apply w-full h-full absolute flex items-center justify-center rounded-full bg-gray-blue-100 dark:bg-gray-blue-700 transition-colors;
}

.checkbox:hover .input > span,
.checkbox .input > input:checked ~ span,
.checkbox .input > input:checked ~ span > span
{
  @apply bg-gradient-to-br from-sky-blue to-purple;
}

.checkbox .input > span > span {
  @apply bg-white dark:bg-blue-500 w-[90%] h-[90%] mx-auto flex items-center justify-center rounded-full transition-all
}

.checkbox .input > span > span:after {
  @apply opacity-0 bg-white w-3 h-3 transition-opacity;
  content: '';
  -webkit-mask: url('@/assets/images/check.svg') no-repeat center;
  mask: url('@/assets/images/check.svg') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.checkbox .input > input:checked ~ span > span:after {
  @apply opacity-100;
}

.checkbox > .complete {
  @apply w-4 h-4 scale-[0.8] transition-all dark:text-[#696c89] text-[#494C6B] opacity-0;
}
.checkbox:hover > .complete {
  @apply opacity-100;
}
</style>