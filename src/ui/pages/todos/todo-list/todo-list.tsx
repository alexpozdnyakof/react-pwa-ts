/* eslint-disable @typescript-eslint/no-unused-vars */
import { Reorder } from 'framer-motion'
import { useRef, useState } from 'react'
import { Todo } from '../../../../domain'
import { Stack } from '../../../layout'
import { Button, Typography } from '../../../lib'
import { addTodo, completeTodo, reoderTodos } from '../state/actions'
import { FormToggle, TitleForm } from '../form'
import { useTodoState } from '../state'
import TodoItem from './todo-item'

const throttle = (fn: Function, wait: number) => {
	let inThrottle: boolean
	let lastFn: NodeJS.Timeout | undefined
	let lastTime: number
	return () => {
		const context = this
		const args = fn.arguments
		if (!inThrottle) {
			fn.apply(context, args)
			lastTime = Date.now()
			inThrottle = true
		} else {
			clearTimeout(lastFn)
			lastFn = setTimeout(() => {
				if (Date.now() - lastTime >= wait) {
					fn.apply(context, args)
					lastTime = Date.now()
				}
			}, Math.max(wait - (Date.now() - lastTime), 0))
		}
	}
}
type TodoListProps = {
	title: string
	progress: string
	todos: Array<Todo>
	id: string
	// eslint-disable-next-line react/no-unused-prop-types
	index: number
}

export default function TodoList({
	title,
	progress,
	todos,
	id,
}: TodoListProps) {
	const { state, dispatch } = useTodoState()
	const [items] = useState<Array<Todo>>(todos)
	const listRef = useRef<HTMLDivElement>(null)

	return (
		<Stack space={2} ref={listRef}>
			<Stack>
				<Typography variant='caption'>{progress}</Typography>
				<Typography variant='list-title'>{title}</Typography>
			</Stack>

			<FormToggle
				testId='todo-item-form'
				onSubmit={text => dispatch(addTodo(text, id))}
			>
				<Button>Add a todo</Button>
				<TitleForm placeholder='Type todo Title' />
			</FormToggle>

			<Stack space={0.5} ml={-2} testId='todo-list'>
				<Reorder.Group
					as='div'
					axis='y'
					values={todos}
					onReorder={newOrder => dispatch(reoderTodos(newOrder, id))}
				>
					{todos.map(todo => (
						<Reorder.Item
							as='div'
							key={todo.type.concat(todo.id.toString())}
							value={todo}
						>
							<TodoItem
								key={todo.type.concat(todo.id.toString())}
							>
								<TodoItem.Complete
									complete={todo.done}
									onComplete={() =>
										dispatch(completeTodo(todo.id, id))
									}
								/>
								<TodoItem.Title>{todo.title}</TodoItem.Title>
							</TodoItem>
						</Reorder.Item>
					))}
				</Reorder.Group>
			</Stack>
		</Stack>
	)
}

export type { TodoListProps }
