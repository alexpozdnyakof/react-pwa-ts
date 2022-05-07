import { Color } from '../../theme/colors'

type ElementSize = number
type ElementSpace = number
type ElementSpaceOrAuto = ElementSpace | 'auto'
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
	radius: number
	borderStyle: 'solid' | 'dashed'
}

type MarginProps = Record<'m' | 'mt' | 'mr' | 'mb' | 'ml', ElementSpaceOrAuto>
interface Attributes {
	testId: string
}

type ReusableBlockProps = SizeProps & MarginProps

type BlockProps = ReusableBlockProps & Attributes & ColorProps & BorderProps

export type {
	ElementSize,
	ElementSpaceOrAuto,
	ReusableBlockProps,
	SizeProps,
	BlockProps,
	ColorProps,
}
