import { Theme, Color, BorderRadius, Space } from '../../styles'

import { BlockProps } from './types'

const addFlexProps = (
	display: unknown,
	flexProps: Record<string, string | number | undefined>
) => (display === 'flex' ? { ...flexProps } : {})

const addGridProps = (
	display: unknown,
	gridProps: Record<string, string | number | undefined>,
	theme: Theme
) => {
	if (display !== 'grid') return {}
	const isSpaceProperty = (propName: string) =>
		['gap', 'rowGap', 'columnGap'].includes(propName)

	const withThemeValues = Object.keys(gridProps)
		.filter(k => gridProps[k] !== undefined)
		.reduce(
			(result, key: string) => ({
				...result,
				[key]: isSpaceProperty(key)
					? theme.space[gridProps[key] as unknown as Space]
					: gridProps[key],
			}),
			{}
		)
	return withThemeValues
}

const addColors = ({ color }: Theme, colorProps: Partial<BlockProps>) => {
	const entries = Object.entries(colorProps).filter(
		([, v]) => v !== undefined
	) as unknown as Array<[keyof Partial<BlockProps>, Color]>
	return Object.fromEntries(entries.map(([k, v]) => [k, color[v]])) as {
		[key: string]: string
	}
}

const addBorderRadius = (
	{ borderRadius }: Theme,
	props: Partial<BlockProps>
) => {
	const entries = Object.entries(props).filter(
		([, v]) => v !== undefined
	) as unknown as Array<[keyof Partial<BlockProps>, BorderRadius]>

	return Object.fromEntries(
		entries.map(([k, v]) => [k, borderRadius[v]])
	) as {
		[key: string]: string
	}
}

export { addFlexProps, addGridProps, addColors, addBorderRadius }
