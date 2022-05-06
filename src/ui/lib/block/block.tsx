import React from 'react'
import { BaseBlock } from './styled-components'

export default function Block({ children }: React.PropsWithChildren<{}>) {
	return <BaseBlock>{children}</BaseBlock>
}
