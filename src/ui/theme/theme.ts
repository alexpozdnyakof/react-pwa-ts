import DARK_COLORS, { Color } from './colors'
import { TEXT_SIZE, TextSize, TEXT_TYPE, TextType } from './text'
import unit from './unit'

interface VisualTheme {
	getColor: (c: Color | undefined) => string | undefined
	getTextSize: (c: TextSize | undefined) => string | undefined
	getTextType: (c: TextType | undefined) => string
}

type WithVisualTheme<T> = T & { theme: VisualTheme }

function createTheme(tokens: Record<Color, string>) {
	const colors = { ...tokens }
	return {
		getColor: (c: Color | undefined) => (c ? colors[c] : undefined),
		getTextSize: (size: TextSize | undefined) =>
			size ? unit(TEXT_SIZE[size]).px : undefined,
		getTextType: (t: TextType | undefined) =>
			t ? TEXT_TYPE[t] : TEXT_TYPE.sans,
	}
}

export const darkTheme = createTheme(DARK_COLORS)

export type { WithVisualTheme, VisualTheme }
