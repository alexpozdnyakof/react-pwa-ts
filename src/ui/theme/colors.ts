export type Colors =
	| 'action'
	| 'background'
	| 'surface'
	| 'onSurface'
	| 'border'
	| 'text'
	| 'caption'

const darkColors: Record<Colors, string> = {
	action: '#30bb6c',
	background: '#000000',
	border: '#333333',
	surface: '#0e1013',
	onSurface: 'rgba(0,0,0,.7)',
	text: '#fff',
	caption: '#838383',
}

export default darkColors
