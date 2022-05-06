import { CSSObject } from 'styled-components'
import darkColors, { Colors } from './colors'

type VisualTheme = Record<Colors, string> & {}

type WithVisualTheme<T extends CSSObject> = T & { theme: VisualTheme }

export const darkTheme: VisualTheme = {
	...darkColors,
}

export type { WithVisualTheme }
