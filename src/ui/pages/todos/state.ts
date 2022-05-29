import { TodoList } from '../../../domain'
import { DragItem } from './reorder'

export interface TodoPageState {
	projectName: string
	lists: Array<TodoList>
	draggedItem: DragItem | null
}
