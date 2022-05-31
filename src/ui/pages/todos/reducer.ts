/* eslint-disable no-param-reassign */
import { createList, createTodo, Todo } from '../../../domain'
import { Action } from './actions'
import { TodoPageState } from './state'

const findItemIndexById = (items: Array<{ id: string }>, searchedId: string) =>
	items.findIndex(item => item?.id === searchedId)

const logger = (action: Action) => console.log(action.type, action.payload)

export default function TodoPageReducer(
	draft: TodoPageState,
	action: Action
): TodoPageState | void {
	logger(action)
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
				(t: Todo) => t.id === action.payload.todoId
			)

			if (todo) todo.done = true

			break
		}
		default: {
			break
		}
	}
}
