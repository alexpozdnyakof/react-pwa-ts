/* eslint-disable no-param-reassign */
import { createList, createTodo, Todo } from '../../../domain'
import { Action } from './actions'
import moveItem from './reorder/move-item'
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
		case 'reorder_todos': {
			const listIndex = findItemIndexById(
				draft.lists,
				action.payload.listId
			)

			draft.lists[listIndex].todos.sort(
				(todoX: Todo, todoY: Todo) =>
					findItemIndexById(action.payload.todos, todoX.id) -
					findItemIndexById(action.payload.todos, todoY.id)
			)

			break
		}
		case 'set_dragged_item': {
			draft.draggedItem = action.payload
			break
		}

		case 'move_list': {
			const { draggedId, hoverId } = action.payload
			const dragIndex = findItemIndexById(draft.lists, draggedId)
			const hoverIndex = findItemIndexById(draft.lists, hoverId)
			const result = moveItem(draft.lists, dragIndex, hoverIndex)
			console.log({ result })
			draft.lists = result
			break
		}
		case 'move_todo': {
			const {
				draggedItemId,
				hoveredItemId,
				sourceColumnId,
				targetColumnId,
			} = action.payload

			const sourceListIndex = findItemIndexById(
				draft.lists,
				sourceColumnId
			)
			const targetListIndex = findItemIndexById(
				draft.lists,
				targetColumnId
			)
			if (!draft.lists[sourceListIndex].todos)
				throw new Error(`${sourceListIndex} todos is empty`)
			const dragIndex = findItemIndexById(
				draft.lists[sourceListIndex].todos,
				draggedItemId
			)
			if (!draft.lists[targetListIndex].todos)
				throw new Error(`${sourceListIndex} todos is empty`)
			const targetList = Object.create(draft.lists[targetListIndex])
			console.log({ targetList })

			const hoverIndex = hoveredItemId
				? findItemIndexById(
						draft.lists[targetListIndex].todos,
						hoveredItemId
				  )
				: 0

			const item = draft.lists[sourceListIndex].todos[dragIndex]
			draft.lists[sourceListIndex].todos.splice(dragIndex, 1)

			draft.lists[targetListIndex].todos.splice(hoverIndex, 0, item)

			break
		}
		default: {
			break
		}
	}
}
