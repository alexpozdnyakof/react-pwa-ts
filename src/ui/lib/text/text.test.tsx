import { screen } from '@testing-library/react'
import React from 'react'
import { getHTMLElement } from '../../helpers'
import Text, { TextProps } from './text'

const renderTextComponent = (
	props: TextProps,
	result = { ...props, children: 'text' }
) => getHTMLElement<React.PropsWithChildren<TextProps>>(Text, result)
describe('Text Component', () => {
	it('should render correctly', () => {
		renderTextComponent({})

		const children = screen.getByText(/text/i)
		expect(children).toBeInTheDocument()
	})

	it('should set font size', () => {
		const props: TextProps = {
			size: 'medium',
		}
		const result = renderTextComponent(props)

		expect(result).toHaveStyle({
			fontSize: '15px',
		})
	})
	it('should set font weight', () => {
		const props: TextProps = {
			weight: 'semibold',
		}
		const result = renderTextComponent(props)

		expect(result).toHaveStyle({
			fontWeight: '600',
		})
	})
	it('should set tone', () => {
		const props: TextProps = {
			tone: 'action',
		}
		const result = renderTextComponent(props)

		expect(result).toHaveStyle({
			color: '#30bb6c',
		})
	})
	it('should set line height', () => {
		const props: TextProps = {
			line: 20,
		}
		const result = renderTextComponent(props)

		expect(result).toHaveStyle({
			lineHeight: '20px',
		})
	})

	it('should set font family', () => {
		const props: TextProps = {
			mono: true,
		}
		const result = renderTextComponent(props)

		expect(result).toHaveStyle({
			fontFamily: 'monospace',
		})
	})
	it('should set text algn', () => {
		const props: TextProps = {
			align: 'right',
		}
		const result = renderTextComponent(props)

		expect(result).toHaveStyle({
			textAlign: 'right',
		})
	})
	it('should set spacing', () => {
		const props: TextProps = {
			spacing: -0.03,
		}
		const result = renderTextComponent(props)

		expect(result).toHaveStyle({
			letterSpacing: '-0.03em',
		})
	})
})
