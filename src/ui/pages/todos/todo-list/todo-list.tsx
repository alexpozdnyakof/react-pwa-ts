import { useCallback, useRef } from 'react'
import { useDrop } from 'react-dnd'
import { Todo } from '../../../../domain'
import { Stack } from '../../../layout'
import { Block, Button, Icon, Typography } from '../../../lib'
import { addTodo, completeTodo, moveList } from '../actions'
import { useTodoState } from '../context'
import { FormToggle, TitleForm } from '../form'

import { useItemDrag } from '../reorder/use-item-drag'
import isHidden from './is-hidden'
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
	index,
	isPreview = false,
}: TodoListProps) {
	const { draggedItem, dispatch } = useTodoState()

	const handlerRef = useRef<HTMLDivElement>(null)
	const listRef = useRef<HTMLDivElement>(null)
	const { drag } = useItemDrag({
		type: 'list',
		id,
		title,
		todos,
		index,
		progress,
	})

	const [, drop] = useDrop({
		accept: 'list',
		hover() {
			if (!draggedItem) {
				return
			}
			if (draggedItem.type === 'list') {
				if (draggedItem.id === id) {
					return
				}
				dispatch(moveList(draggedItem.id, id))
			}
		},
	})

	drag(handlerRef)
	drop(listRef)

	const renderTodo = useCallback(
		(todo: Todo, columnId: string) => (
			<TodoItem
				key={todo.type.concat(todo.id.toString())}
				todo={todo}
				columnId={columnId}
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
			space={2}
			transform={isPreview ? 'scale(1.03)' : undefined}
			opacity={isHidden(draggedItem, 'list', id, isPreview) ? 0 : 1}
			backgroundColor={isPreview ? 'background' : 'transparent'}
			borderStyle='solid'
			borderWidth={1}
			borderColor={isPreview ? 'border' : 'transparent'}
			willChange='transform, background, opacity'
			transition='all ease 150ms'
			pb={16}
			pl={32}
			ref={listRef}
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
					ref={handlerRef}
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

			<FormToggle
				testId='todo-item-form'
				onSubmit={text => dispatch(addTodo(text, id))}
			>
				<Button>Add a todo</Button>
				<TitleForm placeholder='Type todo Title' />
			</FormToggle>

			<Stack space={0.5} ml={-2} testId='todo-list'>
				{todos.filter(Boolean).map(todo => renderTodo(todo, id))}
			</Stack>
		</Stack>
	)
}

export type { TodoListProps }
