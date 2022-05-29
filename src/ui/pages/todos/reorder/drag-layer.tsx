import { useDragLayer } from 'react-dnd'
import { Block } from '../../../lib'
import { useTodoState } from '../context'
import { TodoList } from '../todo-list'
import TodoItem from '../todo-list/todo-item'
import DragPreview from './drag-preview'

export const DragLayer = () => {
	const { draggedItem } = useTodoState()
	const { currentOffset } = useDragLayer(monitor => ({
		currentOffset: monitor.getSourceClientOffset(),
	}))

	console.log({ draggedItem })

	return draggedItem && currentOffset ? (
		<Block
			height={{ value: 100, unit: 'pct' }}
			width={{ value: 100, unit: 'pct' }}
			left={0}
			position='fixed'
			top={0}
			zIndex={1000}
			pointerEvents='none'
		>
			<DragPreview position={currentOffset}>
				<Block width={840}>
					{draggedItem.type === 'list' ? (
						<TodoList
							id={draggedItem.id}
							title={draggedItem.title}
							todos={draggedItem.todos}
							progress={draggedItem.progress}
							index={0}
							isPreview
						/>
					) : (
						<TodoItem
							todo={draggedItem as any}
							columnId={draggedItem.columnId}
							isPreview
						>
							<TodoItem.Complete
								complete={draggedItem?.done}
								onComplete={() => {}}
							/>
							<TodoItem.Title>
								{draggedItem?.title || 'empty'}
							</TodoItem.Title>
						</TodoItem>
					)}
				</Block>
			</DragPreview>
		</Block>
	) : null
}
