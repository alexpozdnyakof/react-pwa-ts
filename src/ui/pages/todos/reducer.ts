/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createList, createTodo, Todo } from '../../../domain'
import { Action } from './actions'
import mix from './reorder/mix'
import moveBetween, { moveBetweenCurry } from './reorder/move-between'
import moveItem, { addByIndex, delByIndex } from './reorder/move-item'
import { TodoPageState } from './state'

const findItemIndexById = (items: Array<{ id: string }>, searchedId: string) =>
	items.findIndex(item => item?.id === searchedId)

const logger = (action: Action) => console.log(action.type, action.payload)

export default function TodoPageReducer(
	draft: TodoPageState,
	action: Action
): TodoPageState | void {
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

		case 'set_dragged_item': {
			draft.draggedItem = action.payload
			break
		}

		case 'add_point': {
			const pointIndex = draft.points.findIndex(
				item => item?.todoId === action.payload.todoId
			)

			if (pointIndex === -1) {
				draft.points.push(action.payload)
			} else {
				draft.points[pointIndex] = action.payload
			}

			break
		}
		case 'move_todo': {
			logger(action)

			const { y } = action.payload

			const intersection = draft.points.find(
				item => y > item.y.min && y < item.y.max
			)

			if (intersection?.todoId) {
				const fromListIndex = findItemIndexById(
					draft.lists,
					action.payload.listId
				)
				const toListIndex = findItemIndexById(
					draft.lists,
					intersection.listId
				)

				const fromTodoIndex = findItemIndexById(
					draft.lists[fromListIndex].todos,
					action.payload.todoId
				)
				const targetTodoIndex = findItemIndexById(
					draft.lists[toListIndex].todos,
					intersection.todoId
				)

				if (intersection?.listId === action.payload.listId) {
					draft.lists[fromListIndex].todos = moveItem(
						draft.lists[fromListIndex].todos,
						fromTodoIndex,
						targetTodoIndex
					)
				} else {
					// prettier-ignore
					const [completeFrom, completeTo] = moveBetweenCurry(
						draft.lists[fromListIndex].todos,
						draft.lists[toListIndex].todos,
					)(
						fromTodoIndex,
						targetTodoIndex
					)

					draft.lists[toListIndex].todos = completeTo
					draft.lists[fromListIndex].todos = completeFrom
				}
			}

			break
		}

		default: {
			break
		}
	}
}
