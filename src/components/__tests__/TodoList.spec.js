import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TodoList from '../Todo/TodoList.vue'
import TodoItem from '../Todo/TodoItem.vue'
import TodoFilter from '../Todo/TodoFilter.vue'

describe('TodoList', () => {
  it('TodoItem component exist', async () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.findComponent(TodoItem).exists()).toBe(true)
  })

  it('TodoFilter component exist', async () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.findComponent(TodoFilter).exists()).toBe(true)
  })
})
