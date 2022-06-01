import { ReactElement } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { TodoPageStateProvider } from './ui/pages/todos/context'
import { GlobalStyles } from './ui/styles'
import { darkTheme } from './ui/theme'

export default function AppProviders({
	children,
}: {
	children: [ReactElement<typeof App>, ReactElement<typeof GlobalStyles>]
}) {
	return (
		<ThemeProvider theme={darkTheme}>
			<TodoPageStateProvider>
				<Router>{children}</Router>
			</TodoPageStateProvider>
		</ThemeProvider>
	)
}
