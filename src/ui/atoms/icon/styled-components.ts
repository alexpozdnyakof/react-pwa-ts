import styled from 'styled-components'
import { Color, Size, Theme, WithStyledTheme } from '../../styles'

interface SvgProps {
	width: Size
	height: Size
	fill?: Color | 'transparent'
	stroke?: Color | 'transparent'
}

const addColors = (
	theme: Theme,
	props: Record<'fill' | 'stroke', Color | 'transparent' | undefined>
) => {
	const value = (v: Color | 'transparent' | undefined) => {
		if (!v) return 'currentColor'
		if (v === 'transparent') return v
		return theme.color[v]
	}

	const entries = Object.entries(props).map(([k, v]) => [k, value(v)])
	return Object.fromEntries(entries)
}

const Svg = styled.svg(
	({ theme, width, height, fill, stroke }: WithStyledTheme<SvgProps>) => ({
		width: theme.size[width],
		height: theme.size[height],
		minWidth: theme.size[width],
		minHeight: theme.size[height],
		...addColors(theme, { fill, stroke }),
		transition: `${theme.animation.time}ms fill, ${theme.animation.time}ms stroke`,
		display: 'inline-block',
		border: '1px solid transparent',

		pointerEvents: 'none' as 'none',
		color: 'currentColor',
		boxSizing: 'border-box' as 'border-box',
	})
)

export { Svg }
