import { Route, Routes } from 'react-router-dom'
import { TopBar } from './ui/layout'
import SignInPage from './ui/pages/sign-in/sign-in'
import SignUpPage from './ui/pages/sign-up/sign-up'
import { TodosPage } from './ui/pages/todos'

function App() {
	return (
		<>
			<TopBar />
			<Routes>
				<Route path='/todos' element={<TodosPage />} />
				<Route path='/sign-in' element={<SignInPage />} />
				<Route path='/sign-up' element={<SignUpPage />} />
			</Routes>
		</>
	)
}

export default App
