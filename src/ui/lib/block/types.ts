import { Color } from '../../theme/colors'

type Unit = 'pct' | 'vh' | 'vw' | 'px'

type ElementSize = number | { value: number; unit: Unit }
type ElementSpace = number
type ElementSpaceOrAuto = ElementSpace | 'auto' | string
interface ElementSizeProps {
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

type MarginProps = Partial<
	Record<'m' | 'mt' | 'mr' | 'mb' | 'ml', ElementSpaceOrAuto>
>
interface Attributes {
	testId: string
}

type ReusableBlockProps = ElementSizeProps & MarginProps

type BlockProps = ReusableBlockProps & Attributes & ColorProps & BorderProps

export type {
	ElementSize,
	ElementSpaceOrAuto,
	ReusableBlockProps,
	ElementSizeProps,
	BlockProps,
	ColorProps,
	MarginProps,
	Unit,
}
