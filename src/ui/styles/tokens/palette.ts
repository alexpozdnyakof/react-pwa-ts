enum Palette {
	blue = 'blue',
	green = 'green',
	amber = 'amber',
	orange = 'orange',
	winterSky = 'winterSky',
	blueViolet = 'blueViolet',
	azure = 'azure',
	black900 = 'black900',
	black800 = 'black800',
	black700 = 'black700',
	black500 = 'black500',
	black300 = 'black300',
	black100 = 'black100',
	black50 = 'black50',
	gray = 'gray',
	white = 'white',
}

type PaletteMap = Record<Palette, string>

const palette: PaletteMap = {
	[Palette.green]: '#30BB6C',
	[Palette.blue]: '#0095F6',
	[Palette.amber]: '#FFBE0B',
	[Palette.orange]: '#FB5607',
	[Palette.winterSky]: '#FF006E',
	[Palette.blueViolet]: '#8338EC',
	[Palette.azure]: '#3A86FF',
	[Palette.black900]: '#1F1F1F',
	[Palette.black800]: '#242424',
	[Palette.black700]: '#464648',
	[Palette.black500]: '#363636',
	[Palette.black300]: '#8E8E8E',
	[Palette.black100]: '#DBDBDB',
	[Palette.black50]: '#FAFAFA',
	[Palette.gray]: '#EAEEEF',
	[Palette.white]: '#FFF',
}
export default palette
export type { PaletteMap }
export { Palette }
