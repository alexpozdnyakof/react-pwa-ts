import { Todo } from './todo'

export type TodoList = {
	id: number
	type: 'list'
	title: string
	progress: string
	todos: Array<Todo>
}
