import App from './App'

describe('App', () => {
	it('should render todo page', () => {
		const { getByTestId } = renderWithRouter(<App />, '/todos')

		expect(getByTestId('todo-page')).toBeInTheDocument()
	})

	it('should render sign-in page', () => {
		const { getByTestId } = renderWithRouter(<App />, '/sign-in')

		expect(getByTestId('signinpage')).toBeInTheDocument()
	})

	it('should render sign-up page', () => {
		const { getByTestId } = renderWithRouter(<App />, '/sign-up')

		expect(getByTestId('signuppage')).toBeInTheDocument()
	})
})
