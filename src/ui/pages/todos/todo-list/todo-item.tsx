/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import { Box, motion, useMotionValue } from 'framer-motion'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Todo } from '../../../../domain'
import { Block, Icon, Toggle } from '../../../lib'
import Typography from '../../../lib/text/typography'
import { addPoint, moveTodo, setDraggedItem } from '../actions'
import { useTodoState } from '../context'

function TodoItem({
	children,
	todo,
	listId,
	isPreview = false,
}: React.PropsWithChildren<{
	todo: Todo
	listId: string
	isPreview?: boolean
}>) {
	const { dispatch, draggedItem, state } = useTodoState()
	const [hover, setHover] = useState<boolean>(false)
	const measuredLayout = useRef<Box | null>(null)

	const point = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	}
	const isDragging = todo.id === draggedItem?.todoId

	useEffect(() => {
		if (!draggedItem) {
			dispatch(addPoint(todo.id, listId, measuredLayout.current!))
		}
	}, [draggedItem])

	return (
		<motion.div
			data-testid='todo-item'
			data-todo-id={todo.id}
			drag
			dragElastic={0.7}
			dragSnapToOrigin
			layout
			dragMomentum={false}
			// onDrag={(event, gesturePoint) => console.log(gesturePoint)}
			initial={false}
			animate={!isDragging}
			style={{
				display: 'flex',
				alignItems: 'center',
				padding: '2px 8px',
				x: point.x,
				y: point.y,
			}}
			onLayoutMeasure={measured => {
				measuredLayout.current = measured
			}}
			onDragStart={() =>
				dispatch(
					setDraggedItem({
						todoId: todo.id,
						listId,
						...measuredLayout.current!,
					})
				)
			}
			onDragEnd={(e, i) => (
				setHover(false),
				dispatch(setDraggedItem(null)),
				dispatch(moveTodo(todo.id, listId, i.point))
			)}
			onMouseEnter={() => !draggedItem && setHover(true)}
			onMouseLeave={() => !draggedItem && setHover(false)}
		>
			<Block
				display='flex'
				alignItems='center'
				justifyContent='center'
				width={32}
				height={32}
				opacity={hover || isPreview ? 1 : 0}
				transition='opacity 30ms ease background-color 30ms ease'
				hover={{
					color: 'action',
				}}
			>
				<Icon icon='drag' size='large' tone='caption' />
			</Block>
			{children}
		</motion.div>
	)
}

TodoItem.Complete = ({
	complete,
	onComplete,
}: {
	complete: boolean
	onComplete: () => void
}) => <Toggle on={complete} onClick={onComplete} />

TodoItem.Title = ({ children }: React.PropsWithChildren<{}>) => (
	<Typography variant='todo-title'>{children}</Typography>
)

export default TodoItem
