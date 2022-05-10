type TextSize = 'micro' | 'small' | 'body' | 'medium' | 'large' | 'huge'
type TextWeight = 'normal' | 'semibold' | 'bold'
type TextTone = 'text' | 'action' | 'caption'
export const textSizeKeys: Array<TextSize> = [
	'micro',
	'small',
	'body',
	'medium',
	'large',
	'huge',
]
const textSize: Record<TextSize, number> = {
	micro: 10,
	small: 12,
	body: 14,
	medium: 15,
	large: 18,
	huge: 28,
}

export type { TextSize, TextWeight, TextTone }
export default textSize
