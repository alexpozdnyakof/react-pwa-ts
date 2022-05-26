import { TodoList } from '../../../../domain'

export interface TodoPageState {
	projectName: string
	lists: Array<TodoList>
}
