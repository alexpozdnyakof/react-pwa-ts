import { Todo } from '../../../../domain'
import { Stack } from '../../../layout'
import { Button, Typography } from '../../../lib'
import { TitleForm, FormToggle } from '../form'
import { useTodoState } from '../state'

import TodoItem from './todo-item'

type TodoListProps = {
	title: string
	progress: string
	todos: Array<Todo>
	id: string
}

export default function TodoList({
	title,
	progress,
	todos,
	id,
}: TodoListProps) {
	const { dispatch } = useTodoState()

	const addTodo = (todoTitle: string) =>
		dispatch({
			type: 'ADD_TODO',
			payload: { title: todoTitle, listId: id },
		})
	const completeTodo = (todoId: string) =>
		dispatch({
			type: 'COMPLETE_TODO',
			payload: { todoId, listId: id },
		})

	return (
		<Stack space={2}>
			<Stack>
				<Typography variant='caption'>{progress}</Typography>
				<Typography variant='list-title'>{title}</Typography>
			</Stack>

			<FormToggle testId='todo-item-form' onSubmit={addTodo}>
				<Button>Add a todo</Button>
				<TitleForm placeholder='Type todo Title' />
			</FormToggle>

			<Stack space={0.5} ml={-2} testId='todo-list'>
				{todos.map(todo => (
					<TodoItem key={todo.type.concat(todo.id.toString())}>
						<TodoItem.Complete
							complete={todo.done}
							onComplete={() => completeTodo(todo.id)}
						/>
						<TodoItem.Title>{todo.title}</TodoItem.Title>
					</TodoItem>
				))}
			</Stack>
		</Stack>
	)
}

export type { TodoListProps }
