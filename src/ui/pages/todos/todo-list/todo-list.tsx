import { useCallback } from 'react'
import { Todo } from '../../../../domain'
import { Stack } from '../../../layout'
import { Button, Typography } from '../../../lib'
import { addTodo, completeTodo } from '../actions'
import { useTodoState } from '../context'
import { FormToggle, TitleForm } from '../form'
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

	const renderTodo = useCallback(
		(todo: Todo) => (
			<TodoItem key={todo.type.concat(todo.id.toString())}>
				<TodoItem.Complete
					complete={todo.done}
					onComplete={() => dispatch(completeTodo(todo.id, id))}
				/>
				<TodoItem.Title>{todo.title}</TodoItem.Title>
			</TodoItem>
		),
		[]
	)

	return (
		<Stack backgroundColor='background' space={1} testId='todo-list'>
			<Stack>
				<Typography variant='caption'>{progress}</Typography>
				<Typography variant='list-title'>{title}</Typography>
			</Stack>

			<Stack space={2}>
				<Stack space={0.5} ml={-8}>
					{todos.filter(Boolean).map(todo => renderTodo(todo))}
				</Stack>

				<FormToggle
					testId='todo-item-form'
					onSubmit={text => dispatch(addTodo(text, id))}
				>
					<Button shape='circular'>Add a todo</Button>
					<TitleForm placeholder='Type todo Title' />
				</FormToggle>
			</Stack>
		</Stack>
	)
}

export type { TodoListProps }
