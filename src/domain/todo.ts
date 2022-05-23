import { nanoid } from 'nanoid'

interface Todo {
	id: string
	title: string
	done: boolean
	type: 'todo'
}

function createTodo(title: string): Todo {
	return {
		id: nanoid(),
		title,
		done: false,
		type: 'todo',
	}
}

export { createTodo }
export type { Todo }
