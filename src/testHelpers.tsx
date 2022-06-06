import { render, RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AppProviders from './providers'
import { TodoPageStateProvider } from './ui/pages/todos/context'
import { darkTheme } from './ui/theme'

global.renderWithState = (component: ReactElement) =>
	render(
		<ThemeProvider theme={darkTheme}>
			<TodoPageStateProvider>{component}</TodoPageStateProvider>
		</ThemeProvider>
	)

global.renderWithTheme = (component: ReactElement) =>
	render(<ThemeProvider theme={darkTheme}>{component}</ThemeProvider>)

global.renderWithRouter = (
	component: ReactElement,
	...routerHistory: Array<string>
) =>
	render(
		<MemoryRouter initialEntries={routerHistory}>
			<AppProviders>{component}</AppProviders>
		</MemoryRouter>
	)

// eslint-disable-next-line prettier/prettier
type RenderWithRouter = (component: ReactElement, ...args: Array<string>) => RenderResult
type RenderWithTheme = (component: ReactElement) => RenderResult
type RenderWithState = (component: ReactElement) => RenderResult

declare global {
	namespace NodeJS {
		interface Global {
			renderWithTheme: RenderWithTheme
			renderWithRouter: RenderWithRouter
			renderWithState: RenderWithState
		}
	}
	namespace globalThis {
		const renderWithTheme: RenderWithTheme
		const renderWithRouter: RenderWithRouter
		const renderWithState: RenderWithState
	}
}
