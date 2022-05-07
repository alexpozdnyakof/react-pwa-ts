import React from 'react'
import { addUnit } from '../../theme'
import { BaseBlock } from './styled-components'
import { BlockProps, ElementSize } from './types'

const addPixel = (size: ElementSize | undefined): string | undefined => {
	if (typeof size === 'undefined') return size
	return addUnit(size, 'px')
}

export default function Block({
	width,
	height,
	children,
	borderWidth,
	borderRadius,
	testId,
	...props
}: React.PropsWithChildren<Partial<BlockProps>>) {
	const result = {
		width: addPixel(width),
		height: addPixel(height),
		borderWidth: addPixel(borderWidth),
		borderRadius: addPixel(borderRadius),
		...props,
	}
	return (
		<BaseBlock data-testid={testId} {...result}>
			{children}
		</BaseBlock>
	)
}
