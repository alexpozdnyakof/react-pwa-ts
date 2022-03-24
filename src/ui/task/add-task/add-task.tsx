import { SyntheticEvent, useRef, useState } from 'react'
import { TaskData } from '../../../domain'
import { Button } from '../../core/button'
import { PlusIcon } from '../../core/icon'

import {
	ButtonInner,
	ButtonsStack,
	StyledAddTaskButton,
	StyledTaskForm,
	TextArea,
} from './styles'

type TaskDTO = Pick<TaskData, 'text'>

type AddTaskProps = {
	addTask: (task: TaskDTO) => void
}

function AddTaskButton({
	onClick,
}: {
	onClick: (event: SyntheticEvent) => void
}) {
	return (
		<StyledAddTaskButton onClick={onClick}>
			<ButtonInner>
				<PlusIcon />
				<span>Add task</span>
			</ButtonInner>
		</StyledAddTaskButton>
	)
}
export default function AddTask({ addTask }: AddTaskProps) {
	const inputRef = useRef<HTMLTextAreaElement>(null)
	const [enterMode, setEnterMode] = useState(false)

	const handleSubmit = () => {
		if (!inputRef?.current?.value) return
		addTask({ text: inputRef.current.value })
	}

	const handleKeyUp = ({
		keyCode,
	}: React.KeyboardEvent<HTMLTextAreaElement>) => {
		const isEnterPressed = keyCode === 13

		if (isEnterPressed) handleSubmit()
	}

	const handleCancel = () => setEnterMode(false)

	return (
		<>
			{!enterMode && <AddTaskButton onClick={() => setEnterMode(true)} />}
			{enterMode && (
				<>
					<StyledTaskForm>
						<TextArea
							placeholder='Add task'
							ref={inputRef}
							onKeyUp={handleKeyUp}
						/>
					</StyledTaskForm>
					<ButtonsStack>
						<Button onClick={handleSubmit}>Add task</Button>
						<Button onClick={handleCancel} type='secondary'>
							Cancel
						</Button>
					</ButtonsStack>
				</>
			)}
		</>
	)
}
