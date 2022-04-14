import styled from 'styled-components'
import { Color, Size, Theme, WithStyledTheme } from '../../styles'

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

		display: 'inline-block',
		border: '1px solid transparent',
		transition: '200ms fill,200ms stroke',
		pointerEvents: 'none' as 'none',
		color: 'currentColor',
		boxSizing: 'border-box' as 'border-box',
	})
)
// const Svg = styled(StyledSvg).attrs(
// 	({ theme, width, height }: WithStyledTheme<SvgProps>) => ({
// 		viewBox: `0 0 ${theme.size[width]} ${theme.size[height]}`,
// 	})
// )

export { Svg }
