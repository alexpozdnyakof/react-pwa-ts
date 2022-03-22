import React from 'react'
import { render, screen } from '@testing-library/react'
import { LayoutGrid } from './grid'

test('should render grid', () => {
	render(<LayoutGrid>LayoutGrid</LayoutGrid>)
	const result = screen.getByText(/LayoutGrid/i)
	expect(result).toBeInTheDocument()
})
