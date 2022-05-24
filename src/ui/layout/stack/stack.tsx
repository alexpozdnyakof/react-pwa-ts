/* eslint-disable react/prop-types */
import React, { ForwardedRef, forwardRef } from 'react'
import { Block } from '../../lib'
import { SPACE_UNIT } from './constraints'
import { StackProps } from './types'

const Stack = forwardRef<HTMLDivElement, StackProps>(
	(
		{
			space = 0,
			spaceUnit = SPACE_UNIT,
			testId,
			children,
			...props
		}: StackProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		const gap = space * spaceUnit

		return (
			<Block
				{...props}
				display='grid'
				gridAutoFlow='row'
				gap={gap}
				testId={testId}
				ref={ref}
			>
				{children}
			</Block>
		)
	}
)

Stack.displayName = 'Stack'
export default Stack
