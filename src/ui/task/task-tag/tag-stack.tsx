import { CalendarIcon, TagIcon } from '../../core/icon'
import { TagsStack } from './styles'
import TaskTag from './task-tag'

export default function TagStack({
	duedate,
	tags,
}: Partial<{ duedate: string; tags: Array<{ id: number; text: string }> }>) {
	if (!duedate || !tags) return null
	return (
		<TagsStack>
			{duedate && (
				<TaskTag
					text={duedate}
					icon={<CalendarIcon size={12} />}
					color='#a970ff'
				/>
			)}

			{tags?.map(tag => (
				<TaskTag text={tag.text} icon={<TagIcon size={12} />} />
			))}
		</TagsStack>
	)
}
