import { TaskData } from '../domain'
import { formatDate } from '../lib'

export const TASK_DATA: Array<TaskData> = [
	{
		id: 1,
		text: 'Make React task list mvp',
		done: true,
		duedate: formatDate(new Date()),
		tags: [
			{
				id: 1,
				text: 'Alpha',
			},
			{
				id: 2,
				text: 'Beta',
			},
			{
				id: 3,
				text: 'Gamma',
			},
		],
	},
	{
		id: 2,
		text: 'Make React task list mvp',
		done: false,
	},
]
