import styled from 'styled-components'
import { WithStyledTheme } from '../../styles'
import { BlockProps } from './types'
import { convertSpaceTokensToPixels } from '../../helpers'
import { addColors, addFlexProps, addFontProps, addGridProps } from './helpers'

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
