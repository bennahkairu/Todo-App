import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useTodoListStore = defineStore('todolist', {
  state: () => ({
    todos: useStorage('todos', []),
    activeFilter: useStorage('activeFilter', 'all'),
  }),
  getters: {
    allTodos() {
      return this.todos
    },
    activeTodos() {
      return this.todos.filter((todo) => todo.completed === false)
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed !== false)
    },
    isEmpty() {
      return this.todos.length <= 0
    }
  },
  actions: {
    addTodo(itemObj) {
      this.todos.unshift({ ...{ id: new Date().getTime() }, ...itemObj})
    },
    clearCompleted () {
      this.todos = this.todos.filter(todo => todo.completed === false)
    },
    deleteTodo(itemIndex) {
      this.todos.splice(itemIndex, 1)
    },
    reorderTodo(from, to) {
      const item = this.todos.splice(from, 1)
      this.todos.splice(to, 0, item[0])
    }
  }
})
