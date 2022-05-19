import { renderWithTheme } from '../../helpers'
import DARK_COLORS from '../../theme/colors'
import Toggle from './toggle'

describe('Toggle', () => {
	it('should render component', () => {
		const { getByTestId } = renderWithTheme(
			<Toggle on={false} onClick={() => {}} />
		)

		expect(getByTestId('toggle')).toBeInTheDocument()
	})

	it('should change background and show icon', () => {
		const { getByTestId } = renderWithTheme(
			<Toggle on onClick={() => {}} />
		)
		expect(getByTestId('toggle')).toHaveStyle({
			'background-color': DARK_COLORS.action,
		})
		expect(getByTestId('icon')).toHaveStyle({
			opacity: 1,
		})
	})
})
