import { PropsWithChildren } from 'react'
import { Block } from '../lib'
import { ReusableBlockProps } from '../lib/block'

export default function Center({
	children,
	testId,
}: Partial<{ testId: string }> &
	Partial<ReusableBlockProps> &
	PropsWithChildren<{}>) {
	return (
		<Block
			testId={testId}
			width={{ value: 100, unit: 'vw' }}
			height={{ value: 100, unit: 'vh' }}
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			{children}
		</Block>
	)
}
