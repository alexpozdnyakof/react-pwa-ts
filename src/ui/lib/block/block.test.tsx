import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { getHTMLElement } from '../../helpers'

import { darkTheme } from '../../theme/theme'
import Block from './block'
import {
	BlockProps,
	ColorProps,
	ElementSizeProps,
	MarginProps,
	PaddingProps,
	TextProps,
} from './types'

const renderBlockWithProps = (
	props: Partial<BlockProps>,
	result = { ...props, children: 'text' }
) => getHTMLElement<React.PropsWithChildren<Partial<BlockProps>>>(Block, result)

describe('Block Component', () => {
	it('should render correctly', () => {
		renderBlockWithProps({})

		const children = screen.getByText(/text/i)
		expect(children).toBeInTheDocument()
	})

	it('should set width and height', () => {
		const props = {
			width: 100,
			height: 50,
		}

		const result = renderBlockWithProps(props)

		expect(result).toHaveStyle({
			width: '100px',
			height: '50px',
		})
	})

	it('should set width and height with custom unit', () => {
		const props: ElementSizeProps = {
			width: { value: 100, unit: 'pct' },
			height: { value: 100, unit: 'vh' },
		}

		const result = renderBlockWithProps(props)

		expect(result).toHaveStyle({
			width: '100%',
			height: '100vh',
		})
	})

	it('should set background-color, color, border-color', () => {
		const props = {
			backgroundColor: 'surface',
			color: 'text',
			borderColor: 'border',
		} as ColorProps

		const result = renderBlockWithProps(props as ColorProps)

		expect(result).toHaveStyle({
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
		const result = renderBlockWithProps(props)
		expect(result).toHaveStyle({
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

		const result = renderBlockWithProps(props)

		expect(result).toHaveStyle({
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

		const result = renderBlockWithProps(props)

		expect(result).toHaveStyle({
			margin: '0px auto',
		})

		expect(result).not.toHaveStyle({
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

		const result = renderBlockWithProps(props)

		expect(result).toHaveStyle({
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
		const result = renderBlockWithProps(props)

		expect(result).toHaveStyle({
			padding: '20px',
		})
	})

	it('should set text size and weight', () => {
		const props: TextProps = {
			fontSize: 'huge',
			fontWeight: 'semibold',
		}

		const result = renderBlockWithProps(props)

		expect(result).toHaveStyle({
			fontSize: '28px',
			fontWeight: '600',
		})
	})
})
