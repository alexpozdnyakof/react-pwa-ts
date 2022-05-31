import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../helpers'
import Button from './button-factory'

describe('Button Factory Component', () => {
	it('should render outline by default', () => {
		renderWithTheme(<Button />)

		expect(screen.getByTestId('outlineButton')).toBeInTheDocument()
	})

	it('should render link button', () => {
		renderWithTheme(<Button variant='link' />)

		expect(screen.getByTestId('linkButton')).toBeInTheDocument()
	})

	it('should render rounded button', () => {
		const { getByTestId } = renderWithTheme(<Button shape='rounded' />)

		expect(getByTestId('outlineButton')).toHaveStyle({
			borderRadius: '6px',
		})
	})
	it('should render circular button', () => {
		const { getByTestId } = renderWithTheme(<Button shape='circular' />)

		expect(getByTestId('outlineButton')).toHaveStyle({
			borderRadius: '12px',
		})
	})
})
