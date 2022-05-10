import build from './style-builder'
import { BaseBlockProps } from './styled-components'

describe('style builder', () => {
	it('should set property', () => {
		const builder = build()
		const test = {
			property: 'fontSize' as keyof BaseBlockProps,
		}

		const value = '10px'

		builder.apply(value, test)
		const result = builder.get()

		expect(result[test.property]).toBe(value)
	})

	it('should not add undefined value to result', () => {
		const builder = build()
		const test = {
			property: 'fontWeight' as keyof BaseBlockProps,
		}
		const value = undefined
		builder.apply(value, test as any)
		const result = builder.get()

		expect(result[test.property]).toBeUndefined()
	})

	it('should transform value', () => {
		const builder = build()
		const test = {
			property: 'fontSize' as keyof BaseBlockProps,
			transform: (x: number) => x.toString().concat('px'),
		}
		const value = 13

		builder.apply(value, test as any)
		const result = builder.get()

		expect(result[test.property]).toBe('13px')
	})
})
