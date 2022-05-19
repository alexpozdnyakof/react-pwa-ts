import React, { createContext, useContext, useMemo } from 'react'

import { TODO_LISTS } from '../../../data'
import { TodoList } from '../../../domain'

interface TodoPageState {
	projectName: string
	lists: Array<TodoList>
}

export interface TodoPageContextProps {
	state: TodoPageState
}

const data: TodoPageState = {
	projectName: 'Command&Conquer'.concat(' To-dos'),
	lists: TODO_LISTS,
}
const TodoPageStateContext = createContext({} as TodoPageContextProps)

export const TodoPageStateProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const state = useMemo(() => ({ state: data }), [])

	return (
		<TodoPageStateContext.Provider value={state}>
			{children}
		</TodoPageStateContext.Provider>
	)
}

export const useTodoState = () => useContext(TodoPageStateContext)
