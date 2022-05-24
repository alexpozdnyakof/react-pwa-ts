import React from 'react'
import { Block } from '../../lib'

export default function Container({ children }: React.PropsWithChildren<{}>) {
	return (
		<Block width={1088} m='0 auto'>
			{children}
		</Block>
	)
}
