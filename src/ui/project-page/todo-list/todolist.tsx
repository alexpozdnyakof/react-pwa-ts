import React from 'react'
import { Block } from '../../core/block'

export default function TodoList({ children }: React.PropsWithChildren<{}>) {
	return <Block>{children}</Block>
}
