export type Color =
	| 'action'
	| 'actionHover'
	| 'background'
	| 'surface'
	| 'onSurface'
	| 'border'
	| 'borderLightFocus'
	| 'borderLight'
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
	'borderLight',
	'borderLightFocus',
	'text',
	'caption',
	'transparent',
	'white',
	'black',
	'current',
]

const defaultColors = { white: '#fff', black: '#000', current: 'currentColor' }

const DARK_COLORS: Record<Color, string> = {
	action: '#34C759',
	actionHover: 'rgb(40 246 129 / 25%)',
	background: '#1E1E1E',
	border: '#333333',
	borderLight: '#555555',
	borderLightFocus: '#d7d8de',
	surface: '#222325',
	onSurface: 'rgba(30,30,30,.7)',
	text: '#fff',
	caption: '#d7d8de',
	transparent: 'transparent',
	...defaultColors,
}

export default DARK_COLORS
