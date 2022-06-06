import { Block } from '../lib'
import Center from './center'

describe('Center', () => {
	it('should render sucessfully', () => {
		const { getByTestId } = renderWithTheme(
			<Center testId='center'>
				<Block testId='child' />
			</Center>
		)
		expect(getByTestId('center')).toBeInTheDocument()
		expect(getByTestId('child')).toBeInTheDocument()
	})
})
