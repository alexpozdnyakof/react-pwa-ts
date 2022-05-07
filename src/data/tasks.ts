import { Todo } from '../domain'

export const TODOS: Array<Todo> = [
	{
		id: 1,
		title: 'Blood report graph is showing blank',
		done: true,
	},
	{
		id: 2,
		title: 'Deactivate|| User is not able to deactivate the account',
		done: false,
	},
	{
		id: 3,
		title: 'My profile || User is not able to view the weight and height which are set during signup',
		done: false,
	},
	{
		id: 4,
		title: 'Profile, edit profile and Pop-ups',
		done: false,
	},
	{
		id: 5,
		title: 'Need Apple developer account to share build',
		done: false,
	},
].map(item => ({ ...item, type: 'todo' }))
