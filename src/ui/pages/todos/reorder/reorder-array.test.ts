import reorderArray from './reorder-array'

describe('move in array', () => {
	const indexError = 'Invalid index'
	const lengthError = 'Invalid array length'

	it('should throw Error if array empty', () => {
		expect(() => reorderArray([], 0, 0)).toThrowError(lengthError)
	})

	it('should throw Error if from greater then length', () => {
		expect(() => reorderArray([1], 2, 0)).toThrowError(indexError)
	})

	it('should throw Error if to greater then length', () => {
		expect(() => reorderArray([1], 0, 2)).toThrowError(indexError)
	})

	it('should do nothing for single element', () => {
		expect(reorderArray([1], 0, 0)).toStrictEqual([1])
	})

	it('should move first to last', () => {
		expect(reorderArray([1, 2, 3], 0, 2)).toStrictEqual([2, 3, 1])
	})

	it('should move last to first', () => {
		expect(reorderArray([1, 2, 3], 2, 0)).toStrictEqual([3, 1, 2])
	})

	it('should move middle to last', () => {
		expect(reorderArray([1, 2, 3], 1, 2)).toStrictEqual([1, 3, 2])
	})
})
