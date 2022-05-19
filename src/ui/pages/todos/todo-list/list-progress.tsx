import React from 'react'
import { Text } from '../../../lib'

export default function TodoListProgress({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<Text
			size='small'
			tone='caption'
			weight='semibold'
			line={16}
			spacing={-0.03}
		>
			{children}
		</Text>
	)
}
