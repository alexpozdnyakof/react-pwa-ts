import { CSSObject } from 'styled-components'
import { BaseBlockProps } from './styled-components'
import { ElementSize } from './types'

interface ApplyParams {
	property: string
	value: string | number | boolean | undefined | ElementSize
	transform?: (x: any) => string
}

interface StyleBuilder {
	apply: (params: ApplyParams) => StyleBuilder
	get: () => CSSObject
	withTail: (tail: any) => BaseBlockProps
}

const build = (): StyleBuilder => {
	const styles = Object.create(null) as CSSObject

	const result = {
		apply: ({ property, transform = x => `${x}`, value }: ApplyParams) => {
			if (value !== undefined) styles[property] = transform(value)
			return result
		},
		get: () => styles,
		withTail: (tail: CSSObject) =>
			Object.assign(styles, tail) as BaseBlockProps,
	}

	return result
}

export type { StyleBuilder }
export default build
