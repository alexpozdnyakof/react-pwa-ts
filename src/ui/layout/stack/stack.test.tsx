import { screen } from '@testing-library/react'
import { getHTMLElement } from '../../helpers'
import Stack from './stack'
import { StackProps } from './types'

const renderStackComponent = (
	props: StackProps,
	result = {
		...props,
		children: <div>text</div>,
	}
) => getHTMLElement<StackProps>(Stack, result)

describe('Text Component', () => {
	it('should render correctly', () => {
		renderStackComponent({ space: 0 })

		const children = screen.getByText(/text/i)
		expect(children).toBeInTheDocument()
	})

	it('should set space', () => {
		const space = 2
		const spaceUnit = 8
		const htmlElement = renderStackComponent({ space, spaceUnit })

		expect(htmlElement).toHaveStyle({
			gap: `${space * spaceUnit}px`,
		})
	})
})
