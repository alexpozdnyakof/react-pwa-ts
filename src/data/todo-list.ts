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
		index: 0,
	},
	{
		title: 'Android Production Bugs',
		progress: '11/13 completed',
		todos: TODOS,
		type: 'list',
		id: nanoid(),
		index: 1,
	},
	{
		title: 'Web Development Bugs',
		progress: '11/13 completed',
		todos: TODOS,
		type: 'list',
		id: nanoid(),
		index: 2,
	},
	{
		title: 'MacOS Bugs',
		progress: '11/13 completed',
		todos: TODOS,
		type: 'list',
		id: nanoid(),
		index: 3,
	},
]
