import { Todo } from '../../../../domain'
import { Stack } from '../../../layout'
import { Button, Typography } from '../../../lib'
import { TitleForm, FormToggle } from '../form'

import TodoItem from './todo-item'

type TodoListProps = {
	title: string
	progress: string
	todos: Array<Todo>
}

export default function TodoList({ title, progress, todos }: TodoListProps) {
	return (
		<Stack space={2}>
			<Stack>
				<Typography variant='caption'>{progress}</Typography>
				<Typography variant='list-title'>{title}</Typography>
			</Stack>

			<FormToggle
				testId='todo-item-form'
				onSubmit={todoTitle => {
					console.log({ todoTitle })
				}}
			>
				<Button>Add a todo</Button>
				<TitleForm placeholder='Type todo Title' />
			</FormToggle>

			<Stack space={0.5} ml={-2} testId='todo-list'>
				{todos.map(todo => (
					<TodoItem key={todo.type.concat(todo.id.toString())}>
						<TodoItem.Complete
							complete={todo.done}
							onComplete={() => {
								console.log({ todoId: todo.id })
							}}
						/>
						<TodoItem.Title>{todo.title}</TodoItem.Title>
					</TodoItem>
				))}
			</Stack>
		</Stack>
	)
}

export type { TodoListProps }
