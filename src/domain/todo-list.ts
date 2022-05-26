import { nanoid } from 'nanoid'
import { Todo } from './todo'

export type TodoList = {
	id: string
	type: 'list'
	title: string
	progress: string
	todos: Array<Todo>
	index: number
}

function createList(title: string): TodoList {
	return {
		id: nanoid(),
		type: 'list',
		todos: [],
		title,
		progress: '0 completed',
		index: 0,
	}
}

export { createList }
