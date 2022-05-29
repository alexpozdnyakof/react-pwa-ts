/* eslint-disable react/require-default-props */
import React, { useCallback, useRef, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Todo } from '../../../../domain'
import { Block, Icon, Toggle } from '../../../lib'
import Typography from '../../../lib/text/typography'
import { moveTodo } from '../actions'
import { useTodoState } from '../context'
import { useItemDrag } from '../reorder/use-item-drag'
import isHidden from './is-hidden'

function TodoItem({
	children,
	todo,
	columnId,
	isPreview = false,
}: React.PropsWithChildren<{
	todo: Todo
	columnId: string
	isPreview?: boolean
}>) {
	const [hover, setHover] = useState<boolean>(false)
	const toggleHover = useCallback(
		(preview: boolean) => {
			if (preview) setHover(false)
			setHover(!hover)
		},
		[hover]
	)
	const { draggedItem, dispatch } = useTodoState()
	const { drag } = useItemDrag({
		...todo,
		columnId,
		type: 'todo',
	})
	const dropRef = useRef<HTMLDivElement>(null)
	const dragRef = useRef<HTMLDivElement>(null)

	const [, drop] = useDrop({
		accept: 'todo',
		hover() {
			if (
				!draggedItem ||
				draggedItem.type !== 'todo' ||
				draggedItem.id === todo.id
			) {
				return
			}

			dispatch(
				moveTodo(
					draggedItem.id,
					todo.id,
					draggedItem.columnId,
					columnId
				)
			)
		},
	})
	drag(dragRef)
	drop(dropRef)

	return (
		<Block
			display='flex'
			alignItems='center'
			testId='todo-item'
			pl={8}
			pr={8}
			pt={2}
			pb={2}
			ref={dropRef}
			opacity={isHidden(draggedItem, 'todo', todo.id, isPreview) ? 0 : 1}
			onMouseEnter={() => toggleHover(isPreview)}
			onMouseLeave={() => toggleHover(isPreview)}
		>
			<Block
				display='flex'
				alignItems='center'
				justifyContent='center'
				width={32}
				height={32}
				ref={dragRef}
				opacity={hover || isPreview ? 1 : 0}
				transition='opacity 30ms ease background-color 30ms ease'
				hover={{
					color: 'action',
				}}
			>
				<Icon icon='drag' size='large' tone='caption' />
			</Block>
			{children}
		</Block>
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
