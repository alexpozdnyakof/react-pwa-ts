import { useState } from 'react'
import { InboxIcon } from './ui/core/icon'
import './App.scss'
import { AddTask } from './ui/task/add-task'
import Task from './ui/task/task'
import { TASK_DATA } from './data'
import { TaskData } from './domain'
import { TaskDTO } from './ui/task/types'
import { formatDate } from './lib'

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

function createTask(
	dto: TaskDTO,
	tasks: Array<TaskData>
): TaskData & { duedate: string } {
	const lastId = tasks[tasks.length - 1].id ?? 0
	return {
		id: lastId + 1,
		...dto,
		done: false,
		duedate: formatDate(new Date()),
	}
}
function App() {
	const [state, setState] = useState<Array<TaskData>>([...TASK_DATA])

	const addTaskFn = (dto: TaskDTO) => {
		const task = createTask(dto, state)
		setState([...state, task])
	}
	return (
		<div className='App'>
			<div className='top-bar' />
			<PageHeader />
			<div className='view-content'>
				<div className='task-list'>
					{state.map(({ text, done, duedate, tags }) => (
						<Task
							text={text}
							done={done}
							duedate={duedate}
							tags={tags}
						/>
					))}
				</div>
				<AddTask addTask={addTaskFn} />
			</div>
		</div>
	)
}

export default App
