/* eslint-disable @typescript-eslint/no-unused-vars */
import { Todo } from '../../../../domain'
import { useEditMode } from './use-edit-mode'
import { useFocus } from './use-focus'

const emptyString = (x: unknown): boolean =>
	typeof x === 'string' && x.trim().length === 0
export default function TodoForm({
	onAddTodo,
	onLeaveEditMode,
}: {
	onAddTodo: (todoTitle: Todo['title']) => void
	onLeaveEditMode: () => void
}) {
	const [editMode, toggleEditMode] = useEditMode()

	const ref = useFocus()

	// const addTodo = (title: string) => (
	// 	toggleEditMode(),
	// 	onLeaveEditMode(),
	// 	emptyString(title) && onAddTodo(title)
	// )

	// const keyboardController = (event: React.KeyboardEvent<HTMLDivElement>) => {
	// 	if (!['Escape', 'Enter'].includes(event.key)) return
	// 	event.preventDefault()

	// 	if (event.key === 'Escape') {
	// 		toggleEditMode()
	// 		onLeaveEditMode()
	// 	}

	// 	if (event.key === 'Enter') {
	// 		addTodo(ref.current?.textContent as string)
	// 	}
	// }

	// const handleBlur = () => {
	// 	addTodo(ref.current?.textContent as string)
	// }

	// const handleButtonClick = () => {
	// 	toggleEditMode()

	// 	if (editMode) ref.current?.focus()
	// }

	// const state: { buttonText: string; todoItemDisplay: 'block' | 'none' } = {
	// 	buttonText: editMode ? 'Cancel' : 'Add to-do',
	// 	todoItemDisplay: editMode ? 'block' : 'none',
	// }

	return <>value</>
}
