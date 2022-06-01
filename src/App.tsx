import { Route, Routes } from 'react-router-dom'
import { TopBar } from './ui/layout'
import { TodosPage } from './ui/pages/todos'

function App() {
	return (
		<>
			<TopBar />
			<Routes>
				<Route path='/todos' element={<TodosPage />} />
			</Routes>
		</>
	)
}

export default App
