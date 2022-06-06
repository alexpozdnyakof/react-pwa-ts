import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import AppProviders from './providers'

describe('App', () => {
	it('should render todo page', () => {
		const { getByTestId } = render(
			<MemoryRouter initialEntries={['/todos']}>
				<AppProviders>
					<App />
				</AppProviders>
			</MemoryRouter>
		)

		expect(getByTestId('todo-page')).toBeInTheDocument()
	})

	it('should render sign-in page', () => {
		const { getByTestId } = render(
			<MemoryRouter initialEntries={['/sign-in']}>
				<AppProviders>
					<App />
				</AppProviders>
			</MemoryRouter>
		)

		expect(getByTestId('signinpage')).toBeInTheDocument()
	})

	it('should render sign-up page', () => {
		const { getByTestId } = render(
			<MemoryRouter initialEntries={['/sign-up']}>
				<AppProviders>
					<App />
				</AppProviders>
			</MemoryRouter>
		)

		expect(getByTestId('signuppage')).toBeInTheDocument()
	})
})
