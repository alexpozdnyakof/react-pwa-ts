import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../helpers'
import Button from './button-factory'

describe('Button Factory Component', () => {
	it('should render succesfully', () => {
		renderWithTheme(<Button testId='button' />)

		expect(screen.getByTestId('button')).toBeInTheDocument()
	})

	it('should render outline button', () => {
		renderWithTheme(<Button variant='outline' />)

		expect(screen.getByTestId('outlineButton')).toBeInTheDocument()
	})

	it('should render link button', () => {
		renderWithTheme(<Button variant='link' />)

		expect(screen.getByTestId('linkButton')).toBeInTheDocument()
	})

	it('should render filled button', () => {
		renderWithTheme(<Button variant='filled' />)

		expect(screen.getByTestId('filledButton')).toBeInTheDocument()
	})
})
