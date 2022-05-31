import { Box } from 'framer-motion'
import { createContext, Dispatch, PropsWithChildren, useContext } from 'react'
import { useImmerReducer } from 'use-immer'
import { TODO_LISTS } from '../../../data'
import { Action } from './actions'
import TodoPageReducer from './reducer'

import { TodoPageState } from './state'

interface TodoPageContextProps {
	state: TodoPageState
	dispatch: Dispatch<Action>
	draggedItem: ({ listId: string; todoId: string } & Box) | null
	points: Array<Box & { todoId: string; listId: string }>
}

const data: TodoPageState = {
	projectName: 'Command&Conquer'.concat(' To-dos'),
	lists: TODO_LISTS,
	draggedItem: null,
	points: [] as Array<Box & { todoId: string; listId: string }>,
}

const TodoPageStateContext = createContext({} as TodoPageContextProps)

const TodoPageStateProvider = ({ children }: PropsWithChildren<{}>) => {
	const [state, dispatch] = useImmerReducer(TodoPageReducer, data)
	// const memoizedState = useMemo(() => ({ state, dispatch }), [])
	const { draggedItem, points } = state
	return (
		<TodoPageStateContext.Provider
			// eslint-disable-next-line react/jsx-no-constructed-context-values
			value={{ state, dispatch, draggedItem, points }}
		>
			{children}
		</TodoPageStateContext.Provider>
	)
}

const useTodoState = () => useContext(TodoPageStateContext)

export { useTodoState, TodoPageStateProvider }
