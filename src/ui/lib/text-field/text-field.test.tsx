import { fireEvent } from '@testing-library/react'
import TextField from './text-field'

describe('Text Field', () => {
	it('should handle key pressed', () => {
		const onKeyDownFn = jest.fn()
		const { getByTestId } = renderWithTheme(
			<TextField onKeyDown={onKeyDownFn} value='123' />
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

	it('should set placeholder', () => {
		const placeholder = 'placeholder'
		const { getByTestId } = renderWithTheme(
			<TextField placeholder={placeholder} />
		)

		const input = getByTestId('textfield') as HTMLInputElement

		expect(input.placeholder).toBe(placeholder)
	})

	it('should trigger onChange callback', () => {
		const onChangeFn = jest.fn()
		const { getByTestId } = renderWithTheme(
			<TextField onChange={onChangeFn} />
		)

		fireEvent.change(getByTestId('textfield'), { target: { value: 'a' } })

		expect(onChangeFn).toBeCalledTimes(1)
	})

	it('should append large size styles', () => {
		const { getByTestId } = renderWithTheme(
			<TextField testId='text-field' size='large' />
		)

		expect(getByTestId('text-field')).toHaveStyle({ height: '40px' })
	})

	it('should append medium size styles', () => {
		const { getByTestId } = renderWithTheme(
			<TextField testId='text-field' size='medium' />
		)

		expect(getByTestId('text-field')).toHaveStyle({ height: '32px' })
	})

	it('should set name', () => {
		const name = 'textfield'
		const { getByTestId } = renderWithTheme(<TextField name={name} />)

		const input = getByTestId('textfield') as HTMLInputElement

		expect(input.name).toBe(name)
	})

	it('should be invalid', () => {
		const { getByTestId } = renderWithTheme(<TextField invalid />)

		const input = getByTestId('textfield') as HTMLInputElement

		expect(input).not.toBeValid()
	})
})
