import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Todo from "../Todo/Todo.vue";
import TodoForm from "../Todo/TodoForm.vue";
import TodoList from "../Todo/TodoList.vue";

describe("Todo", () => {
  it("TodoForm component exist", async () => {
    const wrapper = shallowMount(Todo);
    expect(wrapper.findComponent(TodoForm).exists()).toBe(true);
  });

  it("TodoList component exist", async () => {
    const wrapper = shallowMount(Todo);
    expect(wrapper.findComponent(TodoList).exists()).toBe(true);
  });
});
