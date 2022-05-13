import React from 'react'
import { Block } from '../../lib'
import { unit } from '../../theme'
import { SPACE_UNIT } from './constraints'
import { StackProps } from './types'

export default function Stack({
	space = 0,
	spaceUnit = SPACE_UNIT,
	testId,
	children,
	...props
}: StackProps) {
	const gap = unit(space * spaceUnit).px
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
