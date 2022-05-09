import React from 'react'
import build from './style-builder'
import { BaseBlock, BaseBlockProps } from './styled-components'
import { BlockProps } from './types'
import { margin, unit } from './utils'

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
	...unhandledProps
}: React.PropsWithChildren<Partial<BlockProps>>) {
	const styles = build()

	styles.apply({
		property: 'width',
		value: width,
		transform: w => unit(w).px,
	})

	styles.apply({
		property: 'height',
		value: height,
		transform: w => unit(w).px,
	})

	styles.apply({
		property: 'borderWidth',
		value: borderWidth,
		transform: w => unit(w).px,
	})

	styles.apply({
		property: 'borderRadius',
		value: radius,
		transform: w => unit(w).px,
	})

	styles.apply({
		property: 'marginTop',
		value: mt,
		transform: w => margin(w),
	})

	styles.apply({
		property: 'marginRight',
		value: mr,
		transform: w => margin(w),
	})

	styles.apply({
		property: 'marginBottom',
		value: mb,
		transform: w => margin(w),
	})

	styles.apply({
		property: 'marginLeft',
		value: ml,
		transform: w => margin(w),
	})

	const result = styles.withTail(unhandledProps) as BaseBlockProps

	return (
		<BaseBlock data-testid={testId} {...result}>
			{children}
		</BaseBlock>
	)
}
