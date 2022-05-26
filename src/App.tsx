import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TopBar } from './ui/layout'
import { TodosPage } from './ui/pages/todos'
import { TodoPageStateProvider } from './ui/pages/todos/state'
import { GlobalStyles } from './ui/styles'
import { darkTheme } from './ui/theme'

function App() {
	return (
		<React.StrictMode>
			<DndProvider backend={HTML5Backend}>
				<ThemeProvider theme={darkTheme}>
					<TodoPageStateProvider>
						<TopBar />
						<TodosPage />
					</TodoPageStateProvider>
					<GlobalStyles />
				</ThemeProvider>
			</DndProvider>
		</React.StrictMode>
	)
}

export default App
