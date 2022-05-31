import { fireEvent } from '@testing-library/react'
import { TODOS } from '../../../../data'
import { renderWithState } from '../../../helpers'
import TodoList from './todo-list'

describe('TodoList', () => {
	const props = {
		title: 'iOS Production Bugs',
		progress: '11/13 completed',
		todos: TODOS,
		id: '123',
		index: 0,
	}
	it('should render title, progress, list and todo item form', () => {
		const { getByTestId, getByText } = renderWithState(
			<TodoList {...props} />
		)
		expect(getByText(props.title)).toBeInTheDocument()
		expect(getByText(props.progress)).toBeInTheDocument()
		expect(getByTestId('todo-list')).toBeInTheDocument()
		expect(getByTestId('todo-item-form')).toBeInTheDocument()
	})

	it('should render all todos', () => {
		const { getAllByTestId } = renderWithState(<TodoList {...props} />)
		expect(getAllByTestId('todo-item')).toHaveLength(props.todos.length)
	})

	it('should change todos order', () => {
		const { getAllByTestId } = renderWithState(<TodoList {...props} />)

		const startOrder = getAllByTestId('todo-item')
		const toDrag = startOrder[0]
		const toDrop = startOrder[3]

		fireEvent.dragStart(toDrag)
		fireEvent.dragEnter(toDrop)
		fireEvent.drop(toDrop)

		const newOrder = getAllByTestId('todo-item')

		expect(newOrder[3]).toHaveAttribute(
			'data-todo-id',
			toDrag.dataset['todo-id']
		)

		expect(newOrder[4]).toHaveAttribute(
			'data-todo-id',
			toDrop.dataset['todo-id']
		)
	})
})
