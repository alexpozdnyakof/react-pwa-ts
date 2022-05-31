/* eslint-disable react/prop-types */
import React, { ForwardedRef, forwardRef } from 'react'

import build from './style-builder'
import { BaseBlock } from './styled-components'
import { BlockProps } from './types'
import { margin, padding, unit, weight, size } from './utils'

const Block = forwardRef<
	HTMLDivElement,
	React.PropsWithChildren<Partial<BlockProps>>
>(
	(
		{
			width,
			height,
			maxWidth,
			maxHeight,
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
			gap,
			rowGap,
			columnGap,
			value,
			ariaLabel,
			placeholder,
			as = 'div',
			testId = 'blockToTest',
			src,
			...unhandledProps
		}: React.PropsWithChildren<Partial<BlockProps>>,
		ref: ForwardedRef<any>
	) => {
		const styles = build()

		styles.apply(width, {
			property: 'width',
			transform: w => size(w!),
		})

		styles.apply(height, {
			property: 'height',
			transform: w => size(w!),
		})

		styles.apply(maxWidth, {
			property: 'maxWidth',
			transform: w => size(w!),
		})

		styles.apply(maxHeight, {
			property: 'maxHeight',
			transform: w => size(w!),
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

		styles.apply(gap, {
			property: 'gap',
			transform: w => unit(w!).px,
		})

		styles.apply(rowGap, {
			property: 'rowGap',
			transform: w => unit(w!).px,
		})

		styles.apply(columnGap, {
			property: 'columnGap',
			transform: w => unit(w!).px,
		})

		const result = styles.withTail(unhandledProps)

		return (
			<BaseBlock
				aria-label={ariaLabel}
				data-testid={testId}
				{...result}
				ref={ref}
				as={as}
				value={value}
				placeholder={placeholder}
				src={src}
			>
				{children}
			</BaseBlock>
		)
	}
)

Block.displayName = 'Block'

export default Block
