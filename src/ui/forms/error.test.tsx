import Error from './error'

describe('Error', () => {
	it('should render correctly', () => {
		const errorMessage = 'error message'
		const { getByText } = renderWithTheme(<Error>{errorMessage}</Error>)
		expect(getByText(errorMessage)).toBeInTheDocument()
	})
})
