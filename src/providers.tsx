import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { TodoPageStateProvider } from './ui/pages/todos/context'
import { GlobalStyles } from './ui/styles'
import { darkTheme } from './ui/theme'

export default function AppProviders({
	children,
}: {
	children: ReactElement<typeof App>
}) {
	return (
		<ThemeProvider theme={darkTheme}>
			<TodoPageStateProvider>{children}</TodoPageStateProvider>
			<GlobalStyles />
		</ThemeProvider>
	)
}
