import { InlineRow } from '../core/inline-row'
import { TaskTitle } from '../core/typography'
import { Space } from '../styles'

import TaskCheckbox from './checkbox/checkbox'

export type TaskProps = {
	id: number
	done: boolean
}

export default function Task({
	done = false,
	children,
}: React.PropsWithChildren<Partial<TaskProps>>) {
	return (
		<InlineRow space={Space.small}>
			<TaskCheckbox checked={done} />
			<TaskTitle>{children}</TaskTitle>
		</InlineRow>
	)
}
