import { useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { setDraggedItem } from '../actions'
import { useTodoState } from '../context'
import { DragItem } from './drag-item'

export const useItemDrag = (item: DragItem) => {
	const { dispatch } = useTodoState()
	const [, drag, preview] = useDrag({
		type: item.type,
		item: () => {
			dispatch(setDraggedItem(item))
			return item
		},
		end: () => dispatch(setDraggedItem(null)),
	})

	useEffect(() => {
		preview(getEmptyImage(), { captureDraggingState: true })
	}, [preview])

	return { drag }
}
