import { TagButton, TagInner } from './styles'
import { TaskTagProps } from './types'

export default function TaskTag({
	icon,
	text,
	color = 'currentColor',
}: Partial<TaskTagProps>) {
	return (
		<TagButton>
			<TagInner style={{ color }}>
				{icon}
				<span>{text}</span>
			</TagInner>
		</TagButton>
	)
}
