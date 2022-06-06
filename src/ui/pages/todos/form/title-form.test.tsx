import { fireEvent } from '@testing-library/react'
import TitleForm from './title-form'

describe('Title Form', () => {
	it('should render title field', () => {
		const { getByTestId } = renderWithTheme(<TitleForm />)
		expect(getByTestId('textfield')).toBeInTheDocument()
	})

	it('should set placeholder', () => {
		const placeholder = '138'
		const { getByTestId } = renderWithTheme(
			<TitleForm placeholder={placeholder} />
		)
		const input = getByTestId('textfield') as HTMLInputElement
		expect(input.placeholder).toBe(placeholder)
	})
	it('should trigger onSubmit callback when press meta+enter', () => {
		const onSubmit = jest.fn()
		const { getByTestId } = renderWithTheme(
			<TitleForm onSubmit={onSubmit} />
		)

		const input = getByTestId('textfield') as HTMLInputElement
		fireEvent.keyDown(input, {
			key: 'Enter',
			metaKey: true,
		})

		expect(onSubmit).toHaveBeenCalled()
	})

	it('should trigger onCancel callback when press Escape ', () => {
		const onCancel = jest.fn()
		const { getByTestId } = renderWithTheme(
			<TitleForm onCancel={onCancel} />
		)

		const input = getByTestId('textfield') as HTMLInputElement
		fireEvent.keyDown(input, {
			key: 'Escape',
		})

		expect(onCancel).toHaveBeenCalled()
	})
})
