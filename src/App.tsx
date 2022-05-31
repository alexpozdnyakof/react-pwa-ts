import React from 'react'
import { ThemeProvider } from 'styled-components'
import { TopBar } from './ui/layout'
import { TodosPage } from './ui/pages/todos'
import { TodoPageStateProvider } from './ui/pages/todos/context'
import { GlobalStyles } from './ui/styles'
import { darkTheme } from './ui/theme'

function App() {
	return (
		<React.StrictMode>
			<ThemeProvider theme={darkTheme}>
				<TodoPageStateProvider>
					<TopBar />
					<TodosPage />
				</TodoPageStateProvider>
				<GlobalStyles />
			</ThemeProvider>
		</React.StrictMode>
	)
}

export default App
