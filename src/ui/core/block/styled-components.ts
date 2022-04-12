import styled from 'styled-components'
import { BlockProps } from './types'

const isFlex = (
	display:
		| 'block'
		| 'flex'
		| 'inline'
		| 'inline-block'
		| 'inline-flex'
		| 'none'
		| 'grid'
		| undefined,
	flexProps: Record<string, string | number | undefined>
) => (display === 'flex' ? { ...flexProps } : {})

const isGrid = (
	display:
		| 'block'
		| 'flex'
		| 'inline'
		| 'inline-block'
		| 'inline-flex'
		| 'none'
		| 'grid'
		| undefined,
	gridProps: Record<string, string | number | undefined>
) => (display === 'grid' ? { ...gridProps } : {})

export const StyledBlock = styled.div(
	({
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

		...props
	}: Partial<BlockProps>) => ({
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
		...props,
	})
)
