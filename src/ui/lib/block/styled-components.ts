import styled from 'styled-components'
import { WithVisualTheme, TextSize, TextType } from '../../theme'
import { BoxProps, ColorProps } from './types'

type PositionProps = Record<'top' | 'right' | 'bottom' | 'left', string>

type PaddingProps = Record<
	'padding' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft',
	string
>
export interface BaseBlockProps
	extends ColorProps,
		BoxProps,
		PositionProps,
		PaddingProps {
	width: string
	height: string
	borderWidth: string
	borderStyle: 'solid' | 'dashed'
	borderRadius: string
	marginTop: string
	marginRight: string
	marginBottom: string
	marginLeft: string
	margin: string
	fontWeight: string
	fontSize: TextSize
	fontFamily: TextType
	lineHeight: string
	letterSpacing: string
}

export const BaseBlock = styled.div(
	({
		theme,
		width,
		height,
		backgroundColor,
		borderColor,
		color,
		fontSize,
		fontFamily,
		...props
	}: WithVisualTheme<Partial<BaseBlockProps>>) => ({
		width,
		height,
		backgroundColor: theme.getColor(backgroundColor),
		borderColor: theme.getColor(borderColor),
		color: theme.getColor(color),
		fontSize: theme.getTextSize(fontSize),
		fontFamily: theme.getTextType(fontFamily),
		...props,
	})
)
