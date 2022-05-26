import { useImmerReducer } from 'use-immer'
import { createContext, Dispatch, PropsWithChildren, useContext } from 'react'
import { TODO_LISTS } from '../../../../data'
import { Action } from './actions'
import { TodoPageState } from './state'
import TodoPageReducer from './reducer'

interface TodoPageContextProps {
	state: TodoPageState
	dispatch: Dispatch<Action>
}

const data: TodoPageState = {
	projectName: 'Command&Conquer'.concat(' To-dos'),
	lists: TODO_LISTS,
}

const TodoPageStateContext = createContext({} as TodoPageContextProps)

const TodoPageStateProvider = ({ children }: PropsWithChildren<{}>) => {
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

export { useTodoState, TodoPageStateProvider }
