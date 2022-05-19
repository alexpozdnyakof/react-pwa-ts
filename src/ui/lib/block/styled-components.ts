import styled from 'styled-components'
import { TextSize, TextType, WithVisualTheme } from '../../theme'
import { BoxProps, ColorProps, Pseudo } from './types'

type PositionProps = Record<'top' | 'right' | 'bottom' | 'left', string>

type PaddingProps = Record<
	'padding' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft',
	string
>
export interface BaseBlockProps
	extends ColorProps,
		BoxProps,
		PositionProps,
		PaddingProps,
		Pseudo {
	width: string
	height: string
	maxWidth: string
	maxHeight: string
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
	transition: string
	type: string
	gap: string
	rowGap: string
	columnGap: string
	gridAutoFlow: 'row' | 'column' | 'dense' | 'row dense' | 'column-dense'
	gridTemplateColumns: string
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
		hover,
		focus,
		focusVisible,
		...props
	}: WithVisualTheme<Partial<BaseBlockProps>>) => ({
		width,
		height,
		backgroundColor: theme.getColor(backgroundColor),
		borderColor: theme.getColor(borderColor),
		color: theme.getColor(color),
		fontSize: theme.getTextSize(fontSize),
		fontFamily: theme.getTextType(fontFamily),
		'&:hover': {
			backgroundColor: theme.getColor(hover?.backgroundColor),
			borderColor: theme.getColor(hover?.borderColor),
			color: theme.getColor(hover?.color),
			boxShadow: hover?.boxShadow,
		},
		'&:focus': {
			borderColor: theme.getColor(focus?.borderColor),
		},
		'&:focus-visible': {
			borderColor: theme.getColor(focusVisible?.borderColor),
			boxShadow: focusVisible?.boxShadow,
		},
		...props,
	})
)
