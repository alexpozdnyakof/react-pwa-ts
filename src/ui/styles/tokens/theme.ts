import { ColorMap, lightThemeColor, darkThemeColor, Color } from './colors'

import palette, { Palette, PaletteMap } from './palette'

enum ThemeVariant {
	light = 'light',
	dark = 'dark',
}

type ThemeColorMap = ColorMap & PaletteMap

function createColors(
	paletteMap: PaletteMap
): (colorPalettemap: Record<Color, Palette>) => ThemeColorMap {
	return (colorPalettemap: Record<Color, Palette>): ThemeColorMap => {
		const entries = Object.entries(colorPalettemap) as Array<
			[Color, Palette]
		>

		return Object.assign(
			Object.create(null),
			Object.fromEntries(
				entries.map(([k, v]) => [k, paletteMap[v as keyof PaletteMap]])
			),
			paletteMap
		)
	}
}

const createColorsWithPalette: (
	colorPalettemap: Record<Color, Palette>
) => ThemeColorMap = createColors(palette)

export default function getThemeColors(theme: ThemeVariant): ThemeColorMap {
	switch (theme) {
		case ThemeVariant.light:
			return createColorsWithPalette(lightThemeColor)
		case ThemeVariant.dark:
			return createColorsWithPalette(darkThemeColor)
		default:
			return createColorsWithPalette(lightThemeColor)
	}
}

export { ThemeVariant }
export type { ThemeColorMap }
