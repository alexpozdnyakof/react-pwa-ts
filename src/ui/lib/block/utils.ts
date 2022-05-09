import { Unit } from './types'

const unit = (value: number): Record<Unit, string> => {
	const stringify = value.toString()

	return {
		px: stringify.concat('px'),
		pct: stringify.concat('%'),
		vh: stringify.concat('vh'),
		vw: stringify.concat('vw'),
	}
}

const margin = (value: number | 'auto' | string): string =>
	typeof value === 'number' ? unit(value).px : value

const padding = (value: number): string => unit(value).px

export { unit, margin, padding }
