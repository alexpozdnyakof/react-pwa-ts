import { render, screen } from '@testing-library/react'
import Block from './block'

describe('Block Component', () => {
	it('should render correctly', () => {
		render(<Block>text</Block>)
		const children = screen.getByText(/text/i)
		expect(children).toBeInTheDocument()
	})

	it('should render', () => {
		render(<Block>text</Block>)
		const children = screen.getByText(/text/i)
		expect(children).toBeInTheDocument()
	})
})
