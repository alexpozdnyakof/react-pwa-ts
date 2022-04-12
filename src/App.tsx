import { ThemeProvider } from 'styled-components'
import { ProjectPage } from './ui/project-page/project-page'

import { darkTheme, GlobalStyles } from './ui/styles'

// function createTask(dto: TaskDTO, lastId: number): TaskData {
// 	return {
// 		id: lastId + 1,
// 		...dto,
// 		done: false,
// 	}
// }

// interface TaskListData {
// 	id: number
// 	title: string
// 	tasks: Array<TaskData>
// }

function App() {
	// const [state, setState] = useState<TaskListData>({
	// 	id: 1,
	// 	title: '📦 First react app',
	// 	tasks: [...TASK_DATA],
	// })

	// const addTaskFn = (dto: TaskDTO) => {
	// 	const lastId = state.tasks[state.tasks.length - 1].id ?? 0

	// 	const task = createTask(dto, lastId)
	// 	setState({ ...state, tasks: [...state.tasks, task] })
	// }
	return (
		<ThemeProvider theme={darkTheme}>
			<ProjectPage />
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
