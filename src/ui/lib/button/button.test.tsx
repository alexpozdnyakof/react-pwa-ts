import { getHTMLElement } from '../../helpers'
import Button, { ButtonProps } from './button'

const renderButton = (
	props: ButtonProps,
	result = {
		...props,
		children: 'button',
	}
) => getHTMLElement<ButtonProps>(Button, result)

describe('Button Component', () => {
	it('should render correctly', () => {
		const result = renderButton({})

		expect(result.innerHTML).toBe('button')
	})

	it('should set space', () => {})
})
