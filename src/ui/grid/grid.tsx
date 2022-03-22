import React from 'react'

import './grid.scss'

function LayoutGrid({
	children,
	gap = 32,
}: React.PropsWithChildren<Partial<{ gap: number }>>): React.ReactElement {
	return (
		<div className='grid' style={{ gridGap: gap.toString().concat('px') }}>
			{children}
		</div>
	)
}

export { LayoutGrid }
