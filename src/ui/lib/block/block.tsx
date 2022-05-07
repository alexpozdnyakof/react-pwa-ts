import React from 'react'
import { addUnit } from '../../theme'
import { BaseBlock } from './styled-components'
import { BlockProps, ElementSize, ElementSpaceOrAuto } from './types'

const addPixel = (size: ElementSize | undefined): string | undefined => {
	if (typeof size === 'undefined') return size
	return addUnit(size, 'px')
}

const addMargin = (
	margin: ElementSpaceOrAuto | undefined
): string | undefined => {
	if (typeof margin === 'undefined') return margin
	if (margin === 'auto') return margin
	if (margin === 0) return margin.toString()
	return addPixel(margin)
}

export default function Block({
	width,
	height,
	children,
	borderWidth,
	radius,
	mt,
	mr,
	mb,
	ml,
	testId,
	...props
}: React.PropsWithChildren<Partial<BlockProps>>) {
	const result = {
		width: addPixel(width),
		height: addPixel(height),
		borderWidth: addPixel(borderWidth),
		borderRadius: addPixel(radius),
		marginTop: addMargin(mt),
		marginRight: addMargin(mr),
		marginBottom: addMargin(mb),
		marginLeft: addMargin(ml),
		...props,
	}
	return (
		<BaseBlock data-testid={testId} {...result}>
			{children}
		</BaseBlock>
	)
}
