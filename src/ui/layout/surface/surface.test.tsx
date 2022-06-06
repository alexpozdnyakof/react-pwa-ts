import { screen } from '@testing-library/react'
import Surface from './surface'

describe('Surface Component', () => {
	it('should render correctly', () => {
		renderWithTheme(<Surface>text</Surface>)
		const children = screen.getByText(/text/i)
		expect(children).toBeInTheDocument()
	})
})
