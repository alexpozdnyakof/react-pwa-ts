import './App.scss'
import { Topbar } from './Layout/Topbar'
import { Stack } from './Layout/Stack'

function App() {
	return (
		<div className='App'>
			<Topbar />
			<div className='container'>
				<Stack>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(el => (
						<div className='box'>{el}</div>
					))}
				</Stack>
			</div>
		</div>
	)
}

export default App
