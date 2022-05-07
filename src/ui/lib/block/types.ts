import { Color } from '../../theme/colors'

type ElementSize = number

interface SizeProps {
	width: ElementSize
	height: ElementSize
}

interface ColorProps {
	backgroundColor: Color
	borderColor: Color
	color: Color
}

interface BorderProps {
	borderWidth: number
	borderRadius: number
	borderStyle: 'solid' | 'dashed'
}

interface Attributes {
	testId: string
}

type ReusableBlockProps = SizeProps & ColorProps & BorderProps

type BlockProps = ReusableBlockProps & Attributes

export type {
	ElementSize,
	ReusableBlockProps,
	SizeProps,
	BlockProps,
	ColorProps,
}
