import styled from 'styled-components'
import { Color, Size, Theme, Animation, WithStyledTheme } from '../../styles'

interface SvgProps {
	width: Size
	height: Size
	fill?: Color
	stroke?: Color
}

const addColors = (
	theme: Theme,
	props: Record<'fill' | 'stroke', Color | undefined>
) => {
	const entries = Object.entries(props).map(([k, v]) => [
		k,
		v ? theme.color[v] : 'currentColor',
	])
	return Object.fromEntries(entries)
}

const Svg = styled.svg(
	({ theme, width, height, fill, stroke }: WithStyledTheme<SvgProps>) => ({
		width: theme.size[width],
		height: theme.size[height],
		minWidth: theme.size[width],
		minHeight: theme.size[height],
		...addColors(theme, { fill, stroke }),
		transition: `${theme.animation[Animation.time]}ms fill, ${
			theme.animation[Animation.time]
		}ms stroke`,
		display: 'inline-block',
		border: '1px solid transparent',

		pointerEvents: 'none' as 'none',
		color: 'currentColor',
		boxSizing: 'border-box' as 'border-box',
	})
)

export { Svg }
