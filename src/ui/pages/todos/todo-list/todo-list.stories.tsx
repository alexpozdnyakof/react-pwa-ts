import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TODOS } from '../../../../data'
import TodoList, { TodoListProps } from './todo-list'

export default {
	title: 'Todo/List',
	component: TodoList,
} as ComponentMeta<typeof TodoList>

const template: ComponentStory<typeof TodoList> = (props: TodoListProps) => (
	<TodoList {...props} />
)

export const DefaultList = template.bind({})

DefaultList.args = {
	title: 'iOS Production Bugs',
	progress: '11/13 completed',
	todos: TODOS,
	id: 'id',
	index: 0,
}
