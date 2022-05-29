import { nanoid } from 'nanoid'
import { createTodo } from '../domain'
import { TodoList } from '../domain/todo-list'

export const TODO_LISTS: Array<TodoList> = [
	{
		title: 'iOS Production Bugs',
		progress: '0/4 completed',
		todos: [
			'Blood report graph is showing blank',
			'Deactivate|| User is not able to deactivate the account',
			'My profile || User is not able to view the weight and height which are set during signup',
			'Profile, edit profile and Pop-ups',
			'Need Apple developer account to share build',
		].map(createTodo),
		type: 'list',
		id: nanoid(),
		index: 0,
	},
	{
		title: 'Android Production Bugs',
		progress: '0/3 completed',
		todos: [
			'Need Apple developer account to share build',
			'UI/UX details required',
			'Share colour & font preference for the app',
		].map(createTodo),
		type: 'list',
		id: nanoid(),
		index: 1,
	},
	{
		title: 'Web Development Bugs',
		progress: '11/13 completed',
		todos: [
			'Profile, edit profile and Pop-ups',
			'Home screen update',
			'61 Blood test report delete – 3 Note',
		].map(createTodo),
		type: 'list',
		id: nanoid(),
		index: 2,
	},
	{
		title: 'MacOS Bugs',
		progress: '0/6 completed',
		todos: [
			'Figure 5: On-boarding page Step 2',
			'Figure 8: Home page 1 Note',
			'Figure 7: On-boarding page Step 3',
			'Figure 8: Home page 2',
			'Figure 14: feedback',
			'Figure 20: Personal Plan',
		].map(createTodo),
		type: 'list',
		id: nanoid(),
		index: 3,
	},
]
