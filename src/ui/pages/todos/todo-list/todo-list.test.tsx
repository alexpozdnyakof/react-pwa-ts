import { TODOS } from '../../../../data'
import { renderWithTheme } from '../../../helpers'
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
		const { getByTestId, getByText } = renderWithTheme(
			<TodoList {...props} />
		)
		expect(getByText(props.title)).toBeInTheDocument()
		expect(getByText(props.progress)).toBeInTheDocument()
		expect(getByTestId('todo-list')).toBeInTheDocument()
		expect(getByTestId('todo-item-form')).toBeInTheDocument()
	})

	it('should render all todos', () => {
		const { getAllByTestId } = renderWithTheme(<TodoList {...props} />)

		expect(getAllByTestId('todo-item')).toHaveLength(props.todos.length)
	})
})
