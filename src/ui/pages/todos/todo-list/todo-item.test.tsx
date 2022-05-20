import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from '../../../helpers'
import DARK_COLORS from '../../../theme/colors'
import TodoItem from './todo-item'

describe('Todo Item', () => {
	it('should render toggle and title', () => {
		const title = 'title'
		const { getByTestId, getByText } = renderWithTheme(
			<TodoItem>
				<TodoItem.Complete complete={false} onComplete={() => {}} />
				<TodoItem.Title>{title}</TodoItem.Title>
			</TodoItem>
		)

		expect(getByTestId('toggle')).toBeInTheDocument()
		expect(getByText(title)).toBeInTheDocument()
	})

	it('should set toggle active when completed', () => {
		const { getByTestId } = renderWithTheme(
			<TodoItem>
				<TodoItem.Complete complete onComplete={() => {}} />
			</TodoItem>
		)

		expect(getByTestId('toggle')).toHaveStyle({
			backgroundColor: DARK_COLORS.action,
		})
	})

	it('should trigger onComplete callback when toggle clicked', () => {
		const onComplete = jest.fn()
		const { getByTestId } = renderWithTheme(
			<TodoItem>
				<TodoItem.Complete complete onComplete={onComplete} />
			</TodoItem>
		)

		fireEvent.click(getByTestId('toggle'))

		expect(onComplete).toHaveBeenCalled()
	})
})
