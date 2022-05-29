import { Todo } from '../../../domain'
import { DragItem } from './reorder/drag-item'

// discriminated union, action type is discriminant
type Action =
	| {
			type: 'add_list'
			payload: string
	  }
	| {
			type: 'add_todo'
			payload: { title: string; listId: string }
	  }
	| {
			type: 'complete_todo'
			payload: { todoId: string; listId: string }
	  }
	| {
			type: 'reorder_todos'
			payload: { todos: Array<Todo>; listId: string }
	  }
	| {
			type: 'move_list'
			payload: {
				draggedId: string
				hoverId: string
			}
	  }
	| {
			type: 'set_dragged_item'
			payload: DragItem | null
	  }
	| {
			type: 'move_todo'
			payload: {
				draggedItemId: string
				hoveredItemId: string | null
				sourceColumnId: string
				targetColumnId: string
			}
	  }

type MatchAction<T, A = Action> = A extends { type: T } ? A : never

const createAction = <T extends Action['type']>(
	type: T,
	payload: MatchAction<T>['payload']
) => ({ type, payload } as Action)

const addTodoList = (title: string): Action => createAction('add_list', title)

const addTodo = (todoTitle: string, listId: string) =>
	createAction('add_todo', { title: todoTitle, listId })

const completeTodo = (todoId: string, listId: string) =>
	createAction('complete_todo', { todoId, listId })

const reoderTodos = (todosInNewOrder: Array<Todo>, listId: string) =>
	createAction('reorder_todos', { todos: todosInNewOrder, listId })

const moveList = (draggedId: string, hoverId: string) =>
	createAction('move_list', { draggedId, hoverId })

const setDraggedItem = (dragged: DragItem | null) =>
	createAction('set_dragged_item', dragged)

const moveTodo = (
	draggedItemId: string,
	hoveredItemId: string | null,
	sourceColumnId: string,
	targetColumnId: string
) =>
	createAction('move_todo', {
		draggedItemId,
		hoveredItemId,
		sourceColumnId,
		targetColumnId,
	})

export type { Action }
export {
	addTodoList,
	addTodo,
	completeTodo,
	reoderTodos,
	setDraggedItem,
	moveList,
	moveTodo,
}
