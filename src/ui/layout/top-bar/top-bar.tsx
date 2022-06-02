import React, { useCallback } from 'react'
import { UserPic } from '../../lib'
import { Block } from '../../lib/block'
import Logo from './logo'

interface Props {
	testId: string
	overlay: 'overlay' | 'sticky'
}

export default function TopBar({ overlay, testId }: Partial<Props>) {
	const position = useCallback(
		(x: 'overlay' | 'sticky' | undefined) => {
			switch (x) {
				case 'overlay': {
					return 'absolute'
				}
				case 'sticky': {
					return 'sticky'
				}
				default: {
					return 'relative'
				}
			}
		},
		[overlay]
	)

	return (
		<Block
			height={64}
			width={{ value: 100, unit: 'pct' }}
			display='flex'
			alignItems='center'
			pl={24}
			pr={32}
			position={position(overlay)}
			testId={testId}
		>
			<Logo />
			<Block flex='1 1 auto' />
			<UserPic image='userpic.jpeg' />
		</Block>
	)
}
