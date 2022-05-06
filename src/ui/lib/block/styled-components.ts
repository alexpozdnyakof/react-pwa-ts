import styled from 'styled-components'
import { WithVisualTheme } from '../../theme/theme'
import { ColorProps } from './types'

interface Props extends Partial<ColorProps> {
	width?: string
	height?: string
}

export const BaseBlock = styled.div(
	({
		theme,
		width,
		height,
		backgroundColor,
		borderColor,
		color,
	}: WithVisualTheme<Props>) => ({
		width,
		height,
		backgroundColor: theme.getColor(backgroundColor),
		borderColor: theme.getColor(borderColor),
		color: theme.getColor(color),
	})
)
