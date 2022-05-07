import { Palette } from './palette'

enum Color {
	action = 'action',
	background = 'background',
	container = 'container',
	textDark = 'textDark',
	textGray = 'textGray',
	border = 'border',
	white = 'white',
}
type ColorMap = Record<Color, string>

const darkThemeColor: Record<Color, Palette> = {
	[Color.action]: Palette.green,
	[Color.background]: Palette.black900,
	[Color.container]: Palette.black800,
	[Color.textDark]: Palette.gray,
	[Color.textGray]: Palette.black300,
	[Color.border]: Palette.black500,
	[Color.white]: Palette.white,
}

const lightThemeColor: Record<Color, Palette> = {
	[Color.action]: Palette.blue,
	[Color.background]: Palette.black50,
	[Color.container]: Palette.black800,
	[Color.textDark]: Palette.black700,
	[Color.border]: Palette.black100,
	[Color.textGray]: Palette.black300,
	[Color.white]: Palette.white,
}

export type { ColorMap }
export { darkThemeColor, lightThemeColor, Color }
