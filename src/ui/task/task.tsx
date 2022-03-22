import TaskCheckbox from './checkbox/checkbox'
import { TaskStack, TaskText, TaskWrapper } from './styles'
import TagStack from './task-tag/tag-stack'

export type TaskProps = {
	text: string
	done?: boolean
	duedate?: string
	tags?: Array<{ id: number; text: string }>
}

export default function Task({ text, duedate, done = false, tags }: TaskProps) {
	return (
		<TaskWrapper>
			<TaskCheckbox checked={done} />
			<TaskStack>
				<TaskText checked={done}>{text}</TaskText>
				<TagStack duedate={duedate} tags={tags} />
			</TaskStack>
		</TaskWrapper>
	)
}
