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

type PaddingProps = Partial<
	Record<'p' | 'pt' | 'pr' | 'pb' | 'pl', ElementSpace>
>
interface Attributes {
	testId: string
}

type ReusableBlockProps = ElementSizeProps & MarginProps & PaddingProps

type BlockProps = ReusableBlockProps & Attributes & ColorProps & BorderProps

export type {
	ElementSize,
	ElementSpaceOrAuto,
	ReusableBlockProps,
	ElementSizeProps,
	BlockProps,
	ColorProps,
	MarginProps,
	PaddingProps,
	Unit,
}
