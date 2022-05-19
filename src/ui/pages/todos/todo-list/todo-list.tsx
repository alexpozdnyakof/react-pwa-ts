import { Todo } from '../../../../domain'
import { Stack } from '../../../layout'
import TodoForm from './todo-form'
import TodoItem from './todo-item'
import Typography from './typography'

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
				<Typography variant='title'>{title}</Typography>
			</Stack>

			<TodoForm
				onAddNewTodo={todoTitle => {
					console.log({ todoTitle })
				}}
			/>

			<Stack space={0.5} ml={-2}>
				{todos.map(todo => (
					<TodoItem>
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
