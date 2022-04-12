import React from 'react'
import { Space } from '../../styles'

import { InlineRow } from '../inline-row'

export default function ButtonGroup({ children }: React.PropsWithChildren<{}>) {
	return <InlineRow space={Space.small}>{children}</InlineRow>
}
