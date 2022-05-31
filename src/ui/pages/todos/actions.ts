import { Box } from 'framer-motion'

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
			type: 'set_dragged_item'
			payload: ({ listId: string; todoId: string } & Box) | null
	  }
	| {
			type: 'move_todo'
			payload: {
				todoId: string
				listId: string
				x: number
				y: number
			}
	  }
	| {
			type: 'add_point'
			payload: Box & { todoId: string; listId: string }
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

const setDraggedItem = (
	dragged: ({ listId: string; todoId: string } & Box) | null
) => createAction('set_dragged_item', dragged)

const moveTodo = (
	todoId: string,
	listId: string,
	offset: { x: number; y: number }
) => createAction('move_todo', { todoId, listId, ...offset })

const addPoint = (todoId: string, listId: string, box: Box) =>
	createAction('add_point', { todoId, listId, ...box })

export type { Action }
export {
	addTodoList,
	addTodo,
	completeTodo,
	setDraggedItem,
	moveTodo,
	addPoint,
}
