import styled from 'styled-components'
import { Space, Theme, WithStyledTheme } from '../../styles'
import { BlockProps } from './types'

const isFlex = (
	display: string | 'flex' | undefined,
	flexProps: Record<string, string | number | undefined>
) => (display === 'flex' ? { ...flexProps } : {})

const isGrid = (
	display: string | 'grid' | undefined,
	gridProps: Record<string, string | number | undefined>
) => (display === 'grid' ? { ...gridProps } : {})

function convertSpaceTokensToPixels<
	T extends Record<string, Space | undefined>
>(space: Theme['space'], withTokens: T): Record<keyof T, string> {
	const entries = Object.entries(withTokens).filter(
		([, value]) => value !== undefined
	) as unknown as Array<[keyof T, Space]>
	const withPixels = entries.map(([key, value]) => [key, space[value]])

	return Object.fromEntries(withPixels)
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

		...props
	}: WithStyledTheme<Partial<BlockProps>>) => ({
		display,
		...isFlex(display, {
			flexDirection,
			alignItems,
			justifyContent,
			flexWrap,
		}),
		...isGrid(display, {
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

		...props,
	})
)
