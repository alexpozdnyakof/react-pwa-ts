import React from 'react'
import build from './style-builder'
import { BaseBlock } from './styled-components'
import { BlockProps } from './types'
import { margin, padding, unit, weight } from './utils'

export default function Block({
	width,
	height,
	children,
	borderWidth,
	radius,
	m,
	mt,
	mr,
	mb,
	ml,
	p,
	pt,
	pr,
	pb,
	pl,
	fontWeight,
	lineHeight,
	letterSpacing,
	testId = 'blockToTest',
	...unhandledProps
}: React.PropsWithChildren<Partial<BlockProps>>) {
	const styles = build()

	styles.apply(width, {
		property: 'width',
		transform: w =>
			typeof w === 'number' ? unit(w).px : unit(w!.value)[w!.unit],
	})

	styles.apply(height, {
		property: 'height',
		transform: w =>
			typeof w === 'number' ? unit(w).px : unit(w!.value)[w!.unit],
	})

	styles.apply(borderWidth, {
		property: 'borderWidth',
		transform: w => unit(w!).px,
	})

	styles.apply(radius, {
		property: 'borderRadius',
		transform: w => unit(w!).px,
	})

	styles.apply(mt, {
		property: 'marginTop',
		transform: w => margin(w!),
	})

	styles.apply(mr, {
		property: 'marginRight',
		transform: w => margin(w!),
	})

	styles.apply(mb, {
		property: 'marginBottom',
		transform: w => margin(w!),
	})

	styles.apply(ml, {
		property: 'marginLeft',
		transform: w => margin(w!),
	})

	styles.apply(m, {
		property: 'margin',
		transform: w => margin(w!),
	})

	styles.apply(pt, {
		property: 'paddingTop',
		transform: w => padding(w!),
	})

	styles.apply(pr, {
		property: 'paddingRight',
		transform: w => padding(w!),
	})

	styles.apply(pb, {
		property: 'paddingBottom',
		transform: w => padding(w!),
	})

	styles.apply(pl, {
		property: 'paddingLeft',
		transform: w => padding(w!),
	})

	styles.apply(p, {
		property: 'padding',
		transform: w => padding(w!),
	})
	styles.apply(fontWeight, {
		property: 'fontWeight',
		transform: w => weight(w!),
	})

	styles.apply(lineHeight, {
		property: 'lineHeight',
		transform: w =>
			typeof w === 'number' ? unit(w).px : unit(w!.value)[w!.unit],
	})

	styles.apply(letterSpacing, {
		property: 'letterSpacing',
		transform: w => unit(w!).em,
	})

	const result = styles.withTail(unhandledProps)

	return (
		<BaseBlock data-testid={testId} {...result}>
			{children}
		</BaseBlock>
	)
}
