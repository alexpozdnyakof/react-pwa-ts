import { useState } from 'react'
import { TaskData } from '../../../domain'
import { useFocus } from '../../../hooks/use-focus'

import { Button } from '../../core/button'
import { TextField } from '../../core/text-field'
import { Kind } from '../../styles'
import TaskCheckbox from '../checkbox/checkbox'
import { TaskStack, TaskWrapper } from '../styles'
import { ButtonsStack } from './styles'

type TaskDTO = Pick<TaskData, 'text'>

type AddTaskProps = {
	addTask: (task: TaskDTO) => void
}

export default function AddTask({ addTask }: AddTaskProps) {
	const inputRef = useFocus()
	const [showForm, setShowForm] = useState(false)

	const handleSubmit = () => {
		if (!inputRef?.current?.value) return
		addTask({ text: inputRef.current.value })
	}
	const handleCancel = () => setShowForm(false)

	const handleKeyUp = ({
		keyCode,
	}: React.KeyboardEvent<HTMLInputElement>) => {
		const isEnterPressed = keyCode === 13
		const isEscapePressed = keyCode === 27

		if (isEnterPressed) handleSubmit()
		if (isEscapePressed) handleCancel()
	}

	if (showForm) {
		return (
			<>
				<TaskWrapper>
					<TaskCheckbox disabled />
					<TaskStack />
				</TaskWrapper>
				<TextField
					placeholder='Task description'
					ref={inputRef}
					onKeyUp={handleKeyUp}
				/>
				<ButtonsStack>
					{!showForm && (
						<Button kind={Kind.secondary} onClick={handleSubmit}>
							Add a to-do
						</Button>
					)}
					{/* <Button onClick={handleCancel} type='secondary'>
						Cancel
					</Button> */}
				</ButtonsStack>
			</>
		)
	}

	return (
		<Button kind={Kind.secondary} onClick={() => setShowForm(true)}>
			Add task
		</Button>
	)
}
