import { useImmerReducer } from 'use-immer'
import { createContext, Dispatch, PropsWithChildren, useContext } from 'react'
import { TODO_LISTS } from '../../../data'
import { Action } from './actions'
import { TodoPageState } from './state'
import TodoPageReducer from './reducer'
import { DragItem } from './reorder/drag-item'

interface TodoPageContextProps {
	state: TodoPageState
	dispatch: Dispatch<Action>
	draggedItem: DragItem | null
}

const data: TodoPageState = {
	projectName: 'Command&Conquer'.concat(' To-dos'),
	lists: TODO_LISTS,
	draggedItem: null,
}

const TodoPageStateContext = createContext({} as TodoPageContextProps)

const TodoPageStateProvider = ({ children }: PropsWithChildren<{}>) => {
	const [state, dispatch] = useImmerReducer(TodoPageReducer, data)
	// const memoizedState = useMemo(() => ({ state, dispatch }), [])
	const { draggedItem } = state
	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<TodoPageStateContext.Provider value={{ state, dispatch, draggedItem }}>
			{children}
		</TodoPageStateContext.Provider>
	)
}

const useTodoState = () => useContext(TodoPageStateContext)

export { useTodoState, TodoPageStateProvider }
