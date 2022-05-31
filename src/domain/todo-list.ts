import { nanoid } from 'nanoid'
import { Todo } from './todo'

export type TodoList = {
	id: string
	type: 'list'
	title: string
	progress: string
	todos: Array<Todo>
}

function createList(title: string): TodoList {
	return {
		id: nanoid(),
		type: 'list',
		todos: [],
		title,
		progress: '0 completed',
	}
}

export { createList }
