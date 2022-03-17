import { InboxIcon } from './components/icon'
import { formatDate } from './formatters'
import './App.scss'
import { AddTask } from './task/add-task'
import Task from './task/task'

function PageHeader() {
	return (
		<header>
			<div className='view-header'>
				<InboxIcon size={24} />
				<div className='title'>Inbox</div>
			</div>
		</header>
	)
}
type TaskTag = {
	id: number
	text: string
}
type TaskItem = {
	id: number
	text: string
	done: boolean
	duedate?: Date
	tags?: Array<TaskTag>
}

const tasks: Array<TaskItem> = [
	{
		id: 1,
		text: 'Make React task list mvp',
		done: true,
		duedate: new Date(),
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
const taskList = tasks.map(task => {
	if (!task.duedate) return task
	return {
		...task,
		duedate: formatDate(task.duedate),
	}
}) as Array<TaskItem & { duedate?: string }>

function App() {
	return (
		<div className='App'>
			<div className='top-bar' />
			<PageHeader />
			<div className='view-content'>
				<div className='task-list'>
					{taskList.map(({ text, done, duedate, tags }) => (
						<Task
							text={text}
							done={done}
							duedate={duedate}
							tags={tags}
						/>
					))}
				</div>
				<AddTask />
			</div>
		</div>
	)
}

export default App
