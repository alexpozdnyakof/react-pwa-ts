type TextSize = 'micro' | 'small' | 'body' | 'medium' | 'large' | 'huge'
type TextWeight = 'normal' | 'semibold' | 'bold'
type TextTone = 'text' | 'action' | 'caption'
const TEXT_TONE_KEYS: Array<TextTone> = ['text', 'action', 'caption']
const TEXT_SIZE_KEYS: Array<TextSize> = [
	'micro',
	'small',
	'body',
	'medium',
	'large',
	'huge',
]
const TEXT_SIZE: Record<TextSize, number> = {
	micro: 10,
	small: 12,
	body: 14,
	medium: 15,
	large: 18,
	huge: 28,
}

type TextType = 'sans' | 'mono'

const TEXT_TYPE_KEYS: Array<TextType> = ['sans', 'mono']

const TEXT_TYPE: Record<TextType, string> = {
	sans: 'sans-serif',
	mono: 'monospace',
}

export type { TextSize, TextWeight, TextTone, TextType }
export { TEXT_SIZE, TEXT_SIZE_KEYS, TEXT_TYPE, TEXT_TYPE_KEYS, TEXT_TONE_KEYS }
