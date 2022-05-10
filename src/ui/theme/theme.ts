import darkColors, { Color } from './colors'
import textSize, { TextSize } from './text'
import unit from './unit'

interface VisualTheme {
	getColor: (c: Color | undefined) => string | undefined
	getTextSize: (c: TextSize | undefined) => string | undefined
}

type WithVisualTheme<T> = T & { theme: VisualTheme }

function createTheme(tokens: Record<Color, string>) {
	const colors = { ...tokens }
	return {
		getColor: (c: Color | undefined) => (c ? colors[c] : undefined),
		getTextSize: (c: TextSize | undefined) =>
			c ? unit(textSize[c]).px : undefined,
	}
}

export const darkTheme = createTheme(darkColors)

export type { WithVisualTheme, VisualTheme }
