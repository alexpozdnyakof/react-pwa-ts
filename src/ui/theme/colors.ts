export type Color =
	| 'action'
	| 'actionHover'
	| 'background'
	| 'surface'
	| 'onSurface'
	| 'border'
	| 'text'
	| 'caption'
	| 'transparent'
	| 'white'
	| 'black'
	| 'current'

export const COLOR_KEYS: Array<Color> = [
	'action',
	'actionHover',
	'background',
	'surface',
	'onSurface',
	'border',
	'text',
	'caption',
	'transparent',
	'white',
	'black',
	'current',
]

const defaultColors = { white: '#fff', black: '#000', current: 'currentColor' }

const DARK_COLORS: Record<Color, string> = {
	action: '#30bb6c',
	actionHover: 'rgb(40 246 129 / 25%)',
	background: '#000000',
	border: '#333333',
	surface: '#0e1013',
	onSurface: 'rgba(0,0,0,.7)',
	text: '#fff',
	caption: '#d7d8de',
	transparent: 'transparent',
	...defaultColors,
}

export default DARK_COLORS
