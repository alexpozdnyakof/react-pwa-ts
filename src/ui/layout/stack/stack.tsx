import React from 'react'
import { Block } from '../../lib'
import { SPACE_UNIT } from './constraints'
import { StackProps } from './types'

export default function Stack({
	space = 0,
	spaceUnit = SPACE_UNIT,
	testId,
	children,
	...props
}: StackProps) {
	const gap = space * spaceUnit

	return (
		<Block
			{...props}
			display='grid'
			gridAutoFlow='row'
			gap={gap}
			testId={testId}
		>
			{children}
		</Block>
	)
}
