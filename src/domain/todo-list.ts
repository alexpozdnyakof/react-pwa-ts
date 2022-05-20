import { Todo } from './todo'

export type TodoList = {
	id: string
	type: 'list'
	title: string
	progress: string
	todos: Array<Todo>
}
