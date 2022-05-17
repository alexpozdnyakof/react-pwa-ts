import { CSSObject } from 'styled-components'
import { BaseBlockProps } from './styled-components'

interface ApplyParams<T = any> {
	property: keyof BaseBlockProps
	transform?: (x: T) => string | number
}
type StyleBuilderResult = Record<keyof BaseBlockProps, string | number>

interface StyleBuilder {
	apply: <T>(value: T, params: ApplyParams<T>) => StyleBuilder
	get: () => StyleBuilderResult
	withTail: (tail: any) => Partial<BaseBlockProps>
}

const build = (): StyleBuilder => {
	const styles = Object.create(null) as StyleBuilderResult

	const result = {
		apply: <T>(
			value: T,
			{ property, transform = x => `${x}` }: ApplyParams<T>
		) => {
			if (value !== undefined) styles[property] = transform(value)
			return result
		},
		get: () => styles,
		withTail: (tail: CSSObject) =>
			Object.assign(styles, tail) as unknown as Partial<BaseBlockProps>,
	}

	return result
}

export type { StyleBuilder }
export default build
