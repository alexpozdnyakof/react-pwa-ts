import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../helpers'
import Surface from './surface'

describe('Surface Component', () => {
	it('should render correctly', () => {
		renderWithTheme(<Surface>text</Surface>)
		const children = screen.getByText(/text/i)
		expect(children).toBeInTheDocument()
	})
})
