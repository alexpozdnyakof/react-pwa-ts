import { TextWeight } from '../../theme'
import unit from '../../theme/unit'
import { ElementSize } from './types'

const isNumber = (v: unknown): v is number => typeof v === 'number'
const isString = (v: unknown): v is string => typeof v === 'string'

const margin = (value: number | 'auto' | string): string =>
	isNumber(value) ? unit(value).px : value

const padding = (value: number): string => unit(value).px

const weight = (w: TextWeight): number =>
	({
		normal: 400,
		semibold: 600,
		bold: 700,
	}[w])

const size = (elSize: ElementSize): string => {
	if (isString(elSize)) return elSize
	if (isNumber(elSize)) return unit(elSize).px
	return unit(elSize.value)[elSize.unit]
}

export { unit, margin, padding, weight, size }
