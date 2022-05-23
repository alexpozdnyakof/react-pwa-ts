import { nanoid } from 'nanoid'
import { Todo } from '../domain'

export const TODOS: Array<Todo> = [
	{
		id: nanoid(),
		title: 'Blood report graph is showing blank',
		done: true,
	},
	{
		id: nanoid(),
		title: 'Deactivate|| User is not able to deactivate the account',
		done: false,
	},
	{
		id: nanoid(),
		title: 'My profile || User is not able to view the weight and height which are set during signup',
		done: false,
	},
	{
		id: nanoid(),
		title: 'Profile, edit profile and Pop-ups',
		done: false,
	},
	{
		id: nanoid(),
		title: 'Need Apple developer account to share build',
		done: false,
	},
].map(item => ({ ...item, type: 'todo' }))
