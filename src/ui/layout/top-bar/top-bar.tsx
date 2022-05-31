import React from 'react'
import { UserPic } from '../../lib'
import { Block } from '../../lib/block'
import Logo from './logo'

export default function TopBar() {
	return (
		<Block
			height={64}
			width={{ value: 100, unit: 'pct' }}
			display='flex'
			alignItems='center'
			pl={24}
			pr={32}
		>
			<Logo />
			<Block flex='1 1 auto' />
			<UserPic image='userpic.jpeg' />
		</Block>
	)
}
