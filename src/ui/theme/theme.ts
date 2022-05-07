import darkColors, { Color } from './colors'

interface VisualTheme {
	color: Record<Color, string>
	getColor: (c: Color | undefined) => string | undefined
}

type WithVisualTheme<T> = T & { theme: VisualTheme }

export const darkTheme: VisualTheme = {
	color: { ...darkColors },
	getColor: (c: Color | undefined) => (c ? darkColors[c] : undefined),
}

export type { WithVisualTheme, VisualTheme }
