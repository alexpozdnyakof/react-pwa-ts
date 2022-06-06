import Button from './button-factory'

describe('Button Factory Component', () => {
	it('should render succesfully', () => {
		const { getByTestId } = renderWithTheme(<Button testId='button' />)

		expect(getByTestId('button')).toBeInTheDocument()
	})

	it('should render outline button', () => {
		const { getByTestId } = renderWithTheme(<Button variant='outline' />)

		expect(getByTestId('outlineButton')).toBeInTheDocument()
	})

	it('should render link button', () => {
		const { getByTestId } = renderWithTheme(<Button variant='link' />)

		expect(getByTestId('linkButton')).toBeInTheDocument()
	})

	it('should render filled button', () => {
		const { getByTestId } = renderWithTheme(<Button variant='filled' />)

		expect(getByTestId('filledButton')).toBeInTheDocument()
	})
})
