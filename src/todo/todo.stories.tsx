import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Todo, TodoProps } from './todo'

export default {
	title: 'Todo/Todo',
	component: Todo,
} as ComponentMeta<typeof Todo>

const TodoTemplate = (args: TodoProps) =>
	(<Todo {...args} />) as any as ComponentStory<typeof Todo>

export const Default = TodoTemplate.bind({}) as any

Default.args = {
	id: 1,
	title: 'Create React MVP application',
	done: false,
	date: new Date(),
}
