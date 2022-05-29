import { DragItem } from '../reorder'

const isHidden = (
	draggedItem: DragItem | null,
	itemType: string,
	id: string,
	isPreview: boolean
): boolean =>
	!isPreview &&
	Boolean(
		draggedItem && draggedItem.type === itemType && draggedItem.id === id
	)
export default isHidden
