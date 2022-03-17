import React from 'react'
import { WithChildren } from '../types'
import './grid.scss'

function LayoutGrid({
	children,
	gap = 32,
}: Partial<WithChildren<{ gap: number }>>): React.ReactElement {
	return (
		<div className='grid' style={{ gridGap: gap.toString().concat('px') }}>
			{children}
		</div>
	)
}

export { LayoutGrid }
