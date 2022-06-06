import Icon from './icon'
import { ICONS_LIB, ICON_SIZE } from './lib'

describe('Icon Component', () => {
	it('should render correctly', () => {
		const { getByTestId } = renderWithTheme(<Icon icon='check' />)

		expect(getByTestId('icon')).toBeInTheDocument()
		expect(getByTestId('icon').innerHTML).toBe(
			`<path d="${ICONS_LIB.check[0]}" fill="currentColor" stroke="currentColor"></path>`
		)
	})

	it('should set size', () => {
		const { getByTestId } = renderWithTheme(
			<Icon icon='check' size='small' />
		)

		expect(getByTestId('icon')).toHaveStyle({
			width: `${ICON_SIZE.small}px`,
			height: `${ICON_SIZE.small}px`,
			maxWidth: `${ICON_SIZE.small}px`,
			maxHeight: `${ICON_SIZE.small}px`,
		})
	})

	it('should set color', () => {
		const { getByTestId } = renderWithTheme(
			<Icon icon='check' tone='current' />
		)

		expect(getByTestId('icon')).toHaveStyle({
			color: 'currentColor',
		})
	})
})
