import React, { createContext, Dispatch, useContext } from 'react'
import { useImmerReducer } from 'use-immer'
import { TODO_LISTS } from '../../../data'
import { createList, createTodo, Todo, TodoList } from '../../../domain'

interface TodoPageState {
	projectName: string
	lists: Array<TodoList>
}

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
const findItemIndexById = (items: Array<{ id: string }>, searchedId: string) =>
	items.findIndex(({ id }) => id === searchedId)
interface TodoPageContextProps {
	state: TodoPageState
	dispatch: Dispatch<Action>
}

const data: TodoPageState = {
	projectName: 'Command&Conquer'.concat(' To-dos'),
	lists: TODO_LISTS,
}

const TodoPageStateContext = createContext({} as TodoPageContextProps)

function TodoPageReducer(
	draft: TodoPageState,
	action: Action
): TodoPageState | void {
	console.log(action.type, action.payload)
	switch (action.type) {
		case 'add_list': {
			draft.lists.push(createList(action.payload))
			break
		}
		case 'add_todo': {
			const targetIndex = findItemIndexById(
				draft.lists,
				action.payload.listId
			)
			draft.lists[targetIndex].todos.push(
				createTodo(action.payload.title)
			)
			break
		}
		case 'complete_todo': {
			const listIndex = findItemIndexById(
				draft.lists,
				action.payload.listId
			)
			const todo = draft.lists[listIndex].todos.find(
				t => t.id === action.payload.todoId
			)

			if (todo) todo.done = true

			break
		}
		case 'reorder_todos': {
			const listIndex = findItemIndexById(
				draft.lists,
				action.payload.listId
			)

			draft.lists[listIndex].todos.sort(
				(todoX, todoY) =>
					findItemIndexById(action.payload.todos, todoX.id) -
					findItemIndexById(action.payload.todos, todoY.id)
			)

			break
		}
		default: {
			break
		}
	}
}

const TodoPageStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [state, dispatch] = useImmerReducer(TodoPageReducer, data)
	// const memoizedState = useMemo(() => ({ state, dispatch }), [])

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<TodoPageStateContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoPageStateContext.Provider>
	)
}

const useTodoState = () => useContext(TodoPageStateContext)

export { TodoPageStateProvider, useTodoState, TodoPageReducer }
