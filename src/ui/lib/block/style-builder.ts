import { CSSObject } from 'styled-components'

interface ApplyParams {
	property: string
	value: string | number | boolean | undefined
	transform?: (x: any) => string
}

interface StyleBuilder {
	apply: (params: ApplyParams) => StyleBuilder
	get: () => CSSObject
	withTail: (tail: any) => CSSObject
}

const build = (): StyleBuilder => {
	const styles = Object.create(null) as CSSObject

	const result = {
		apply: ({ property, transform = x => `${x}`, value }: ApplyParams) => {
			if (value !== undefined) styles[property] = transform(value)
			return result
		},
		get: () => styles,
		withTail: (tail: CSSObject) => Object.assign(styles, tail),
	}

	return result
}

export type { StyleBuilder }
export default build
