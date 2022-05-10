import React from 'react'
import { TextSize, TextTone, TextWeight } from '../../theme'
import { Block } from '../block'
import { WithTestId } from '../helpers'

interface Props {
	size: TextSize
	tone: TextTone
	weight: TextWeight
	line: number
	mono: boolean
}

type TextProps = React.PropsWithChildren<Partial<WithTestId<Props>>>

export default function Text({
	size = 'body',
	tone = 'text',
	weight = 'normal',
	line = 20,
	mono = false,
	children,
	testId,
}: React.PropsWithChildren<Partial<TextProps>>) {
	return (
		<Block
			fontSize={size}
			color={tone}
			fontWeight={weight}
			testId={testId}
			lineHeight={line}
			fontFamily={mono ? 'mono' : 'sans'}
		>
			{children}
		</Block>
	)
}

export type { TextProps }
