import styled from 'styled-components'
import { WithStyledTheme } from '../../styles'
import { BlockProps } from './types'
import { convertSpaceTokensToPixels } from '../../helpers'
import {
	addBorderRadius,
	addColors,
	addFlexProps,
	addGridProps,
} from './helpers'

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
		fontWeight,

		color,
		backgroundColor,
		borderColor,
		borderBottomColor,
		borderRightColor,
		borderRadius,

		...props
	}: WithStyledTheme<Partial<BlockProps>>) => ({
		display,
		...addFlexProps(display, {
			flexDirection,
			alignItems,
			justifyContent,
			flexWrap,
		}),
		...addGridProps(
			display,
			{
				gridAutoFlow,
				gap,
				rowGap,
				columnGap,
				alignItems,
				gridTemplateColumns,
			},
			theme
		),

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
		fontSize: fontSize ? theme.fontSize[fontSize] : undefined,
		fontWeight: fontWeight ? theme.fontWeight[fontWeight] : undefined,
		lineHeight: lineHeight ? theme.lineHeight[lineHeight] : undefined,
		...addColors(theme, {
			color,
			backgroundColor,
			borderColor,
			borderBottomColor,
			borderRightColor,
		}),
		...addBorderRadius(theme, { borderRadius }),

		...props,
	})
)
