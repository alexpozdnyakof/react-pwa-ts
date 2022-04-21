import { Theme, LineHeight, FontSize, Color, BorderRadius } from '../../styles'
import { FontProps, BlockProps } from './types'

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

export { addFlexProps, addGridProps, addFontProps, addColors, addBorderRadius }
