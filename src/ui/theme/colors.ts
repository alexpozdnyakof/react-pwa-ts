export type Color =
	| 'action'
	| 'background'
	| 'surface'
	| 'onSurface'
	| 'border'
	| 'text'
	| 'caption'
	| 'transparent'

export const COLOR_KEYS: Array<Color> = [
	'action',
	'background',
	'surface',
	'onSurface',
	'border',
	'text',
	'caption',
	'transparent',
]

const DARK_COLORS: Record<Color, string> = {
	action: '#30bb6c',
	background: '#000000',
	border: '#333333',
	surface: '#0e1013',
	onSurface: 'rgba(0,0,0,.7)',
	text: '#fff',
	caption: '#838383',
	transparent: 'transparent',
}

export default DARK_COLORS
