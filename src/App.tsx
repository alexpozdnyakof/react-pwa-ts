import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend as Backend } from 'react-dnd-html5-backend'
import { ThemeProvider } from 'styled-components'
import { TopBar } from './ui/layout'
import { TodosPage } from './ui/pages/todos'
import { TodoPageStateProvider } from './ui/pages/todos/context'
import { GlobalStyles } from './ui/styles'
import { darkTheme } from './ui/theme'

function App() {
	return (
		<React.StrictMode>
			<DndProvider backend={Backend}>
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
