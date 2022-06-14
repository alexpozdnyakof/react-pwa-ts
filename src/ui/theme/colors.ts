export type Color =
	| 'action'
	| 'actionHover'
	| 'controlActive'
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
	| 'error'

export const COLOR_KEYS: Array<Color> = [
	'action',
	'controlActive',
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
	'error',
]

const defaultColors = { white: '#fff', black: '#000', current: 'currentColor' }

const DARK_COLORS: Record<Color, string> = {
	action: '#34C759',
	actionHover: 'rgb(40 246 129 / 25%)',
	controlActive:
		'linear-gradient(rgba(2, 212, 128, 0%), rgba(3, 214, 200, 100%)',
	background: '#1a1a1a',
	border: '#333333',
	borderLight: '#555555',
	borderLightFocus: '#d7d8de',
	surface: '#222325',
	onSurface: 'rgba(255, 255, 255, 0.08)',
	text: '#d7d8de',
	caption: 'rgba(255,255,255,.7)',
	transparent: 'transparent',
	error: '#d4442e',
	...defaultColors,
}

export default DARK_COLORS
