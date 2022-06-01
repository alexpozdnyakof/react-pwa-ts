import { createMemoryHistory, MemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import App from './App'

describe('App', () => {
	let history!: MemoryHistory | undefined

	beforeEach(() => {
		history = createMemoryHistory()
	})
	afterEach(() => {
		history = undefined
	})
	it('should render todo page component on todos route', () => {
		history?.push('/todos')

		const { getByTestId } = render(
			<Router location={history?.location!} navigator={history!}>
				<App />
			</Router>
		)

		expect(getByTestId('todo-page')).toBeInTheDocument()
	})
})
