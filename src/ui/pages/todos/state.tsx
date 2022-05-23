import React, { createContext, useContext, useReducer } from 'react'
import { TODO_LISTS } from '../../../data'
import { createList, createTodo, Todo, TodoList } from '../../../domain'

interface TodoPageState {
	projectName: string
	lists: Array<TodoList>
}

// discriminated union, action type is discriminant
type Action =
	| {
			type: 'ADD_LIST'
			payload: string
	  }
	| {
			type: 'ADD_TODO'
			payload: { title: string; listId: string }
	  }
	| {
			type: 'COMPLETE_TODO'
			payload: { todoId: string; listId: string }
	  }

const findItemIndexById = (items: Array<{ id: string }>, searchedId: string) =>
	items.findIndex(({ id }) => id === searchedId)
interface TodoPageContextProps {
	state: TodoPageState
	dispatch: (action: Action) => void
}

const data: TodoPageState = {
	projectName: 'Command&Conquer'.concat(' To-dos'),
	lists: TODO_LISTS,
}

const TodoPageStateContext = createContext({} as TodoPageContextProps)

function TodoPageReducer(state: TodoPageState, action: Action): TodoPageState {
	console.log(action.type, action.payload)
	switch (action.type) {
		case 'ADD_LIST': {
			return {
				...state,
				lists: [createList(action.payload), ...state.lists],
			}
		}
		case 'ADD_TODO': {
			state.lists[
				findItemIndexById(state.lists, action.payload.listId)
			].todos.push(createTodo(action.payload.title))

			return { ...state }
		}
		case 'COMPLETE_TODO': {
			const modifiedLists = state.lists.map(list => {
				if (list.id === action.payload.listId) {
					return {
						...list,
						todos: list.todos.map((todo: Todo) =>
							todo.id === action.payload.todoId
								? { ...todo, done: true }
								: todo
						),
					}
				}
				return list
			})

			console.log(state)

			return { ...state, lists: modifiedLists }
		}
		default: {
			return { ...state }
		}
	}
}

const TodoPageStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [state, dispatch] = useReducer(TodoPageReducer, data)
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
