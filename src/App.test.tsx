import { createMemoryHistory, MemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import App from './App'
import AppProviders from './providers'

describe('App', () => {
	let history!: MemoryHistory | undefined

	beforeEach(() => {
		history = createMemoryHistory()
	})
	afterEach(() => {
		history = undefined
	})
	it('should render todo page', () => {
		history?.push('/todos')

		const { getByTestId } = render(
			<Router location={history?.location!} navigator={history!}>
				<AppProviders>
					<App />
				</AppProviders>
			</Router>
		)

		expect(getByTestId('todo-page')).toBeInTheDocument()
	})

	it('should render sign-in page', () => {
		history?.push('/sign-in')

		const { getByTestId } = render(
			<Router location={history?.location!} navigator={history!}>
				<AppProviders>
					<App />
				</AppProviders>
			</Router>
		)

		expect(getByTestId('signinpage')).toBeInTheDocument()
	})

	it('should render sign-up page', () => {
		history?.push('/sign-up')

		const { getByTestId } = render(
			<Router location={history?.location!} navigator={history!}>
				<AppProviders>
					<App />
				</AppProviders>
			</Router>
		)

		expect(getByTestId('signuppage')).toBeInTheDocument()
	})
})
