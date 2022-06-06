import DARK_COLORS from '../../theme/colors'
import Text from './text'

describe('Text Component', () => {
	it('should render correctly', () => {
		const { getByTestId } = renderWithTheme(
			<Text testId='textComponent'>text</Text>
		)

		expect(getByTestId('textComponent')).toBeInTheDocument()
		expect(getByTestId('textComponent')).toHaveTextContent('text')
	})

	it('should set font size', () => {
		const { getByTestId } = renderWithTheme(
			<Text testId='textComponent' size='medium'>
				text
			</Text>
		)

		expect(getByTestId('textComponent')).toHaveStyle({
			fontSize: '15px',
		})
	})
	it('should set font weight', () => {
		const { getByTestId } = renderWithTheme(
			<Text testId='textComponent' weight='semibold'>
				text
			</Text>
		)

		expect(getByTestId('textComponent')).toHaveStyle({
			fontWeight: '600',
		})
	})
	it('should set tone', () => {
		const { getByTestId } = renderWithTheme(
			<Text testId='textComponent' tone='action'>
				text
			</Text>
		)

		expect(getByTestId('textComponent')).toHaveStyle({
			color: DARK_COLORS.action,
		})
	})
	it('should set line height', () => {
		const { getByTestId } = renderWithTheme(
			<Text testId='textComponent' line={20}>
				text
			</Text>
		)

		expect(getByTestId('textComponent')).toHaveStyle({
			lineHeight: '20px',
		})
	})

	it('should set font family', () => {
		const { getByTestId } = renderWithTheme(
			<Text testId='textComponent' mono>
				text
			</Text>
		)

		expect(getByTestId('textComponent')).toHaveStyle({
			fontFamily: 'monospace',
		})
	})
	it('should set text algn', () => {
		const { getByTestId } = renderWithTheme(
			<Text testId='textComponent' align='right'>
				text
			</Text>
		)

		expect(getByTestId('textComponent')).toHaveStyle({
			textAlign: 'right',
		})
	})
	it('should set spacing', () => {
		const { getByTestId } = renderWithTheme(
			<Text testId='textComponent' spacing={-0.03}>
				text
			</Text>
		)

		expect(getByTestId('textComponent')).toHaveStyle({
			letterSpacing: '-0.03em',
		})
	})
})
