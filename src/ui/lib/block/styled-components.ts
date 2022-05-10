import styled from 'styled-components'
import { WithVisualTheme, TextSize } from '../../theme'
import { ColorProps } from './types'

export interface BaseBlockProps extends ColorProps {
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
	lineHeight: string
	padding: string
	paddingTop: string
	paddingRight: string
	paddingBottom: string
	paddingLeft: string
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
		...props
	}: WithVisualTheme<Partial<BaseBlockProps>>) => ({
		width,
		height,
		backgroundColor: theme.getColor(backgroundColor),
		borderColor: theme.getColor(borderColor),
		color: theme.getColor(color),
		fontSize: theme.getTextSize(fontSize),
		...props,
	})
)
