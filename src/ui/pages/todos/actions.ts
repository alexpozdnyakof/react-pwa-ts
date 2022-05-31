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

export type { Action }
export { addTodoList, addTodo, completeTodo }
