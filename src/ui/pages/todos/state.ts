import { Box } from 'framer-motion'
import { TodoList } from '../../../domain'

export interface TodoPageState {
	projectName: string
	lists: Array<TodoList>
	draggedItem: ({ listId: string; todoId: string } & Box) | null
	points: Array<Box & { todoId: string; listId: string }>
}
