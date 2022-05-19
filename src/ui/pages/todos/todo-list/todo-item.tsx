import React from 'react'
import { Block, Toggle } from '../../../lib'
import Typography from './typography'

function TodoItem({ children }: React.PropsWithChildren<{}>) {
	return (
		<Block display='flex' alignItems='center'>
			{children}
		</Block>
	)
}

TodoItem.Complete = ({
	complete,
	onComplete,
}: {
	complete: boolean
	onComplete: () => void
}) => <Toggle on={complete} onClick={onComplete} />

TodoItem.Title = ({ children }: React.PropsWithChildren<{}>) => (
	<Typography variant='todo-title'>{children}</Typography>
)

export default TodoItem
