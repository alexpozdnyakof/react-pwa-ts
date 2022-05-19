import React from 'react'
import { Text } from '../../../lib'

export default function TodoListTitle({
	children,
}: React.PropsWithChildren<{}>) {
	return (
		<Text
			size='large'
			tone='action'
			spacing={-0.03}
			line={24}
			weight='bold'
		>
			{children}
		</Text>
	)
}
