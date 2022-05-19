import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from '../../../helpers'
import TodoForm from './todo-form'

describe('Todo Form', () => {
	it('should render outline button', () => {
		const { getByTestId } = renderWithTheme(
			<TodoForm onAddNewTodo={() => {}} />
		)
		expect(getByTestId('outlineButton')).toBeInTheDocument()
	})

	it('should render text field', () => {
		const { getByTestId } = renderWithTheme(
			<TodoForm onAddNewTodo={() => {}} />
		)
		fireEvent.click(getByTestId('outlineButton'))
		expect(getByTestId('textfield')).toBeInTheDocument()
	})

	it('should ignore onAddNewTodo callback', () => {
		const onAddNewTodo = jest.fn()

		const { getByTestId } = renderWithTheme(
			<TodoForm onAddNewTodo={onAddNewTodo} />
		)
		fireEvent.click(getByTestId('outlineButton'))
		const input = getByTestId('textfield') as HTMLInputElement

		fireEvent.keyDown(input, {
			key: 'Enter',
			metaKey: true,
		})

		expect(onAddNewTodo).toHaveBeenCalledTimes(0)
	})
	it('should run onAddNewTodo callback', () => {
		const onAddNewTodo = jest.fn()

		const { getByTestId } = renderWithTheme(
			<TodoForm onAddNewTodo={onAddNewTodo} />
		)
		fireEvent.click(getByTestId('outlineButton'))
		const input = getByTestId('textfield') as HTMLInputElement

		fireEvent.change(input, { target: { value: '138' } })
		fireEvent.keyDown(input, {
			key: 'Enter',
			metaKey: true,
		})

		expect(onAddNewTodo).toHaveBeenCalledTimes(1)
	})

	it('should hide textfield', () => {
		const { getByTestId } = renderWithTheme(
			<TodoForm onAddNewTodo={() => {}} />
		)
		fireEvent.click(getByTestId('outlineButton'))

		fireEvent.keyDown(getByTestId('textfield'), {
			key: 'Escape',
		})
		expect(getByTestId('outlineButton')).toBeInTheDocument()
	})
})
