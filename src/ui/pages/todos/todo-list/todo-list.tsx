import { AnimatePresence } from 'framer-motion'
import { useCallback } from 'react'
import { Todo } from '../../../../domain'
import { Stack } from '../../../layout'
import { Block, Button, Icon, Typography } from '../../../lib'
import { addTodo, completeTodo } from '../actions'
import { useTodoState } from '../context'
import { FormToggle, TitleForm } from '../form'
import TodoItem from './todo-item'

type TodoListProps = {
	title: string
	progress: string
	todos: Array<Todo>
	id: string
	// eslint-disable-next-line react/no-unused-prop-types
	index: number
	// eslint-disable-next-line react/require-default-props
	isPreview?: boolean
}

export default function TodoList({
	title,
	progress,
	todos,
	id,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	index,
	isPreview = false,
}: TodoListProps) {
	const { dispatch } = useTodoState()

	const renderTodo = useCallback(
		(todo: Todo, listId: string) => (
			<TodoItem
				key={todo.type.concat(todo.id.toString())}
				todo={todo}
				listId={listId}
			>
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
		<Stack
			transform={isPreview ? 'scale(1.03)' : undefined}
			backgroundColor={isPreview ? 'background' : 'transparent'}
			borderStyle='solid'
			borderWidth={1}
			borderColor={isPreview ? 'border' : 'transparent'}
			willChange='transform, background, opacity'
			transition='all ease 150ms'
			pb={16}
			pl={32}
			radius={8}
		>
			<Block
				display='flex'
				pt={8}
				pb={8}
				radius={8}
				alignItems='flex-end'
				ml={-32}
				backgroundColor={isPreview ? 'surface' : 'transparent'}
				hover={{
					backgroundColor: 'surface',
				}}
			>
				<Block
					display='flex'
					alignItems='center'
					justifyContent='center'
					width={32}
					height={32}
				>
					<Icon icon='drag' size='large' tone='caption' />
				</Block>
				<Stack>
					<Typography variant='caption'>{progress}</Typography>
					<Typography variant='list-title'>{title}</Typography>
				</Stack>
			</Block>
			<Stack space={2}>
				<Stack ml={-40} testId='todo-list'>
					<AnimatePresence>
						{todos
							.filter(Boolean)
							.map(todo => renderTodo(todo, id))}
					</AnimatePresence>
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
