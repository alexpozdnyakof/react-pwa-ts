import { PropsWithChildren } from 'react'
import { TextSize, TextTone, TextWeight } from '../../theme'
import { Block, ReusableBlockProps } from '../block'

interface Props extends ReusableBlockProps {
	size: TextSize
	tone: TextTone
	weight: TextWeight
	line: number
	mono: boolean
	align: 'left' | 'center' | 'right'
	spacing: number
	testId: string
}

export type TextProps = Partial<Props> & PropsWithChildren<{}>

export default function Text({
	size = 'body',
	tone = 'text',
	weight = 'normal',
	line = 20,
	mono = false,
	align = 'left',
	spacing = 0,
	children,
	testId,
	...props
}: React.PropsWithChildren<Partial<TextProps & ReusableBlockProps>>) {
	return (
		<Block
			{...props}
			fontSize={size}
			color={tone}
			fontWeight={weight}
			testId={testId}
			lineHeight={line}
			fontFamily={mono ? 'mono' : 'sans'}
			textAlign={align}
			letterSpacing={spacing}
		>
			{children}
		</Block>
	)
}
