import styled from 'styled-components'
import {
	Color,
	FontSize,
	LineHeight,
	Theme,
	WithStyledTheme,
} from '../../styles'
import { BlockProps, FontProps } from './types'
import { convertSpaceTokensToPixels } from '../../helpers'

const addFlexProps = (
	display: unknown,
	flexProps: Record<string, string | number | undefined>
) => (display === 'flex' ? { ...flexProps } : {})

const addGridProps = (
	display: unknown,
	gridProps: Record<string, string | number | undefined>
) => (display === 'grid' ? { ...gridProps } : {})

const addFontProps = (
	theme: Theme,
	{
		fontSize,
		lineHeight,
	}: Partial<Pick<FontProps, 'fontSize' | 'lineHeight'>>
) => {
	const entries = Object.entries({ fontSize, lineHeight }).filter(
		([, v]) => v !== undefined
	) as unknown as Array<
		[
			keyof Pick<FontProps, 'fontSize' | 'lineHeight'>,
			LineHeight | FontSize
		]
	>

	return Object.fromEntries(entries.map(([k, v]) => [k, theme[k][v]])) as {
		[key: string]: string
	}
}

const addColors = ({ color }: Theme, colorProps: Partial<BlockProps>) => {
	const entries = Object.entries(colorProps).filter(
		([, v]) => v !== undefined
	) as unknown as Array<[keyof Partial<BlockProps>, Color]>
	return Object.fromEntries(entries.map(([k, v]) => [k, color[v]])) as {
		[key: string]: string
	}
}

export const StyledBlock = styled.div(
	({
		theme,

		display,
		flexDirection,
		flexWrap,
		alignItems,
		justifyContent,
		gridAutoFlow,
		gap,
		rowGap,
		columnGap,
		gridTemplateColumns,

		padding,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,

		margin,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,

		fontSize,
		lineHeight,

		color,
		backgroundColor,
		borderColor,
		borderBottomColor,
		borderRightColor,

		...props
	}: WithStyledTheme<Partial<BlockProps>>) => ({
		display,
		...addFlexProps(display, {
			flexDirection,
			alignItems,
			justifyContent,
			flexWrap,
		}),
		...addGridProps(display, {
			gridAutoFlow,
			gap,
			rowGap,
			columnGap,
			alignItems,
			gridTemplateColumns,
		}),

		...convertSpaceTokensToPixels(theme.space, {
			padding,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			margin,
			marginTop,
			marginRight,
			marginBottom,
			marginLeft,
		}),

		...addFontProps(theme, { fontSize, lineHeight }),
		...addColors(theme, {
			color,
			backgroundColor,
			borderColor,
			borderBottomColor,
			borderRightColor,
		}),
		...props,
	})
)
