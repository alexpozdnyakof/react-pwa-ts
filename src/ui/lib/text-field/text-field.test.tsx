import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from '../../helpers'
import TextField from './text-field'

describe('Text Field', () => {
	it('should handle key pressed', () => {
		const onKeyDownFn = jest.fn(e => {
			console.log({ e })
		})
		const { getByTestId } = renderWithTheme(
			<TextField onKeyDown={onKeyDownFn} />
		)

		fireEvent.keyDown(getByTestId('textfield'), { code: 'Enter' })

		expect(onKeyDownFn).toHaveBeenCalledTimes(1)
	})

	it('should set value', () => {
		const settedValue = '138'
		const { getByTestId } = renderWithTheme(
			<TextField value={settedValue} />
		)

		const input = getByTestId('textfield') as HTMLInputElement

		expect(input).toHaveValue(settedValue)
	})

	it('should trigger onChange callback', () => {
		const onChangeFn = jest.fn()
		const { getByTestId } = renderWithTheme(
			<TextField onChange={onChangeFn} />
		)

		fireEvent.change(getByTestId('textfield'), { target: { value: 'a' } })

		expect(onChangeFn).toBeCalledTimes(1)
	})
})
