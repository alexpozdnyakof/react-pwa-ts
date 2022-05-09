import styled from 'styled-components'
import { WithVisualTheme } from '../../theme/theme'
import { ColorProps } from './types'

export interface BaseBlockProps extends Partial<ColorProps> {
	width?: string
	height?: string
	borderWidth?: string
	borderStyle?: 'solid' | 'dashed'
	borderRadius?: string
}

export const BaseBlock = styled.div(
	({
		theme,
		width,
		height,
		backgroundColor,
		borderColor,
		color,
		...props
	}: WithVisualTheme<BaseBlockProps>) => ({
		width,
		height,
		backgroundColor: theme.getColor(backgroundColor),
		borderColor: theme.getColor(borderColor),
		color: theme.getColor(color),
		...props,
	})
)
