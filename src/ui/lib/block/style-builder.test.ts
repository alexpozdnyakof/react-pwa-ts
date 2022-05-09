import build from './style-builder'

describe('style builder', () => {
	it('should set property', () => {
		const builder = build()
		const test = {
			property: 'fontWeight',
			value: 'medium',
		}

		builder.apply(test)
		const result = builder.get()

		expect(result[test.property]).toBe(test.value)
	})

	it('should not add undefined value to result', () => {
		const builder = build()
		const test = {
			property: 'fontWeight',
			value: undefined,
		}

		builder.apply(test)
		const result = builder.get()

		expect(result[test.property]).toBeUndefined()
	})

	it('should transform value', () => {
		const builder = build()
		const test = {
			property: 'fontSize',
			value: 13,
			transform: (x: number) => x.toString().concat('px'),
		}

		builder.apply(test as any)
		const result = builder.get()

		expect(result[test.property]).toBe('13px')
	})
})
