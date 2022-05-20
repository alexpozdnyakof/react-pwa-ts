import { nanoid } from 'nanoid'
import { TodoList } from '../domain/todo-list'
import { TODOS } from './todo'

export const TODO_LISTS: Array<TodoList> = [
	{
		title: 'iOS Production Bugs',
		progress: '11/13 completed',
		todos: TODOS,
		type: 'list',
		id: nanoid(),
	},
	{
		title: 'iOS Production Bugs',
		progress: '11/13 completed',
		todos: TODOS,
		type: 'list',
		id: nanoid(),
	},
	{
		title: 'iOS Production Bugs',
		progress: '11/13 completed',
		todos: TODOS,
		type: 'list',
		id: nanoid(),
	},
	{
		title: 'iOS Production Bugs',
		progress: '11/13 completed',
		todos: TODOS,
		type: 'list',
		id: nanoid(),
	},
]
