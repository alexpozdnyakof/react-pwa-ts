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

interface Attributes {
	testId: string
}
type ReusableBlockProps = SizeProps & ColorProps

type BlockProps = ReusableBlockProps & Attributes

export type {
	ElementSize,
	ReusableBlockProps,
	SizeProps,
	BlockProps,
	ColorProps,
}
