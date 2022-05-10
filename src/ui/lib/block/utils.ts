import { TextWeight } from '../../theme'
import unit from '../../theme/unit'

const margin = (value: number | 'auto' | string): string =>
	typeof value === 'number' ? unit(value).px : value

const padding = (value: number): string => unit(value).px
const weight = (w: TextWeight): number =>
	({
		normal: 400,
		semibold: 600,
		bold: 700,
	}[w])

export { unit, margin, padding, weight }
