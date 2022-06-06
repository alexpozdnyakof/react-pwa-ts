import { fireEvent } from '@testing-library/react'
import { darkTheme } from '../../theme/theme'
import Block from './block'
import {
	ColorProps,
	ElementSizeProps,
	MarginProps,
	PaddingProps,
	TextProps,
} from './types'

describe('Block Component', () => {
	it('should render correctly', () => {
		const { getByTestId } = renderWithTheme(<Block />)

		expect(getByTestId('blockToTest')).toBeInTheDocument()
	})

	it('should set width and height', () => {
		const props = {
			width: 100,
			height: 50,
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			width: '100px',
			height: '50px',
		})
	})

	it('should set width and height with custom unit', () => {
		const props: ElementSizeProps = {
			width: { value: 100, unit: 'pct' },
			height: { value: 100, unit: 'vh' },
			maxHeight: { value: 100, unit: 'pct' },
			maxWidth: 'max-content',
			minHeight: 100,
			minWidth: 100,
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			width: '100%',
			height: '100vh',
			maxHeight: '100%',
			maxWidth: 'max-content',
			minHeight: '100px',
			minWidth: '100px',
		})
	})

	it('should set background-color, color, border-color', () => {
		const props = {
			backgroundColor: 'surface',
			color: 'text',
			borderColor: 'border',
		} as ColorProps

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			backgroundColor: darkTheme.getColor(props.backgroundColor),
			borderColor: darkTheme.getColor(props.borderColor),
			color: darkTheme.getColor(props.color),
		})
	})

	it('should set border-width and border-radius', () => {
		const props = {
			borderWidth: 1,
			radius: 3,
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			borderWidth: '1px',
			borderRadius: '3px',
		})
	})

	it('should set all margins', () => {
		const props: MarginProps = {
			mt: 0,
			mr: 'auto',
			mb: 10,
			ml: 'auto',
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			marginTop: '0px',
			marginRight: 'auto',
			marginBottom: '10px',
			marginLeft: 'auto',
		})
	})
	it('should override margin', () => {
		const props: MarginProps = {
			m: '0px auto',
			mt: 0,
			mr: 'auto',
			mb: 10,
			ml: 'auto',
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			margin: '0px auto',
		})

		expect(getByTestId('blockToTest')).not.toHaveStyle({
			marginTop: '0px',
			marginRight: 'auto',
			marginBottom: '10px',
			marginLeft: 'auto',
		})
	})

	it('should set all padding', () => {
		const props: PaddingProps = {
			pt: 0,
			pr: 10,
			pb: 10,
			pl: 0,
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			paddingTop: '0px',
			paddingRight: '10px',
			paddingBottom: '10px',
			paddingLeft: '0',
		})
	})

	it('should override padding', () => {
		const props: PaddingProps = {
			p: 20,
			pt: 0,
			pr: 10,
			pb: 10,
			pl: 0,
		}
		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			padding: '20px',
		})
	})

	it('should set horizontal padding', () => {
		const props: PaddingProps = {
			px: 20,
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			paddingLeft: '20px',
			paddingRight: '20px',
		})
	})

	it('should set vertical padding', () => {
		const props: PaddingProps = {
			py: 20,
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			paddingTop: '20px',
			paddingBottom: '20px',
		})
	})

	it('should set text props', () => {
		const props: Partial<TextProps> = {
			fontSize: 'huge',
			fontWeight: 'semibold',
			lineHeight: 24,
			fontFamily: 'sans',
			textAlign: 'left',
			letterSpacing: -0.03,
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			fontSize: '28px',
			fontWeight: '600',
			lineHeight: '24px',
			fontFamily: 'sans-serif',
			letterSpacing: '-0.03em',
		})
	})

	it('should trigger click handler', () => {
		const onClick = jest.fn()

		const { getByTestId } = renderWithTheme(<Block onClick={onClick} />)

		fireEvent.click(getByTestId('blockToTest'))
		expect(onClick).toBeCalled()
	})
	it('should trigger onkeydown callback', () => {
		const onKeyDown = jest.fn()

		const { getByTestId } = renderWithTheme(<Block onKeyDown={onKeyDown} />)
		fireEvent.keyDown(getByTestId('blockToTest'))

		expect(onKeyDown).toBeCalled()
	})

	it('should set gap props', () => {
		const props = {
			gap: 10,
			columnGap: 15,
			rowGap: 20,
		}

		const { getByTestId } = renderWithTheme(<Block {...props} />)

		expect(getByTestId('blockToTest')).toHaveStyle({
			gap: '10px',
			columnGap: '15px',
			rowGap: '20px',
		})
	})
	it('should set id attribute', () => {
		const id = 'block'
		const { getByTestId } = renderWithTheme(<Block id={id} />)

		expect(getByTestId('blockToTest')).toHaveAttribute('id', id)
	})

	it('should set name attribute', () => {
		const name = 'block'

		const { getByTestId } = renderWithTheme(<Block name={name} />)

		expect(getByTestId('blockToTest')).toHaveAttribute('name', name)
	})

	it('should set type attribute', () => {
		const type = 'text'

		const { getByTestId } = renderWithTheme(<Block type={type} />)

		expect(getByTestId('blockToTest')).toHaveAttribute('type', type)
	})
})
