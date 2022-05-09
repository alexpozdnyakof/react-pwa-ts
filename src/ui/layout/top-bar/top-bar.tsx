import React from 'react'
import { Block } from '../../lib/block'

export default function TopBar({ children }: React.PropsWithChildren<{}>) {
	return (
		<Block height={64} width={{ value: 100, unit: 'pct' }}>
			{children}
		</Block>
	)
}
