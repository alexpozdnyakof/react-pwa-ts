import createBaseTheme, { BaseTheme } from './tokens'
import getThemeColors, { ThemeColorMap, ThemeVariant } from './tokens/theme'

interface Theme extends BaseTheme {
	color: ThemeColorMap
}

function createTheme(variant: ThemeVariant): Theme {
	return {
		color: { ...getThemeColors(variant) },
		...createBaseTheme(),
	}
}

const darkTheme = ((): Theme =>
	Object.assign(Object.create(null), createTheme(ThemeVariant.dark)))()
const lightTheme = ((): Theme =>
	Object.assign(Object.create(null), createTheme(ThemeVariant.light)))()

export { darkTheme, lightTheme }
export type { Theme }
