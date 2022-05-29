import { Todo, TodoList } from '../../../../domain'

export type TodoDragItem = {
	columnId: string
} & Todo
export type DragItem = TodoList | TodoDragItem
