import { useRef } from 'react'
import { TaskData } from '../../../domain'
import { Button } from '../../core/button'

import { StyledTaskForm, TextArea } from './styles'

type TaskDTO = Pick<TaskData, 'text'>

type AddTaskProps = {
	addTask: (task: TaskDTO) => void
}

export default function AddTask({ addTask }: AddTaskProps) {
	const inputRef = useRef<HTMLTextAreaElement>(null)
	const handleSubmit = () => {
		if (!inputRef?.current?.value) return
		addTask({ text: inputRef.current.value })
	}
	return (
		<>
			<StyledTaskForm>
				<TextArea placeholder='Add task' ref={inputRef} />
			</StyledTaskForm>
			<Button onClick={handleSubmit}>Add task</Button>
		</>
	)
}
