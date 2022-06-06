import { Block } from '../../lib'
import Stack from './stack'

describe('Text Component', () => {
	it('should render correctly', () => {
		const { getByTestId } = renderWithTheme(
			<Stack testId='stack'>
				<Block testId='stackChildren' />
			</Stack>
		)

		expect(getByTestId('stack')).toBeInTheDocument()
		expect(getByTestId('stackChildren')).toBeInTheDocument()
	})

	it('should set space', () => {
		const space = 2
		const spaceUnit = 8

		const { getByTestId } = renderWithTheme(
			<Stack testId='stack' space={space}>
				<Block testId='stackChildren' />
			</Stack>
		)

		expect(getByTestId('stack')).toHaveStyle({
			gap: `${space * spaceUnit}px`,
		})
	})
})
