import { Color, TextSize, TextType, TextWeight } from '../../theme'
import { WithTestId } from '../helpers'

type Unit = 'pct' | 'vh' | 'vw' | 'px'

type ValueWithUnit = { value: number; unit: Unit }
type ElementSize = number | ValueWithUnit
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
interface BoxProps {
	display:
		| 'block'
		| 'flex'
		| 'grid'
		| 'inline'
		| 'inline-block'
		| 'inline-flex'
		| 'none'
	boxSizing: 'border-box' | 'content-box'
	alignItems: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch'
	position: 'relative' | 'static' | 'sticky' | 'absolute'
	overflow: 'hidden' | 'visible' | 'scroll'

	zIndex: number
}

type PositionProps = Record<'top' | 'right' | 'bottom' | 'left', number>
interface TextProps {
	fontSize: TextSize
	fontWeight: TextWeight
	lineHeight: number | ValueWithUnit
	fontFamily: TextType
	textAlign: 'left' | 'center' | 'right'
	letterSpacing: number
}
interface GridProps {
	gridAutoFlow: 'row' | 'column' | 'dense' | 'row dense' | 'column-dense'
	gap: string
	rowGap: string
	columnGap: string
	gridTemplateColumns: string
}

type ReusableBlockProps = ElementSizeProps &
	MarginProps &
	PaddingProps &
	PositionProps

type BlockProps = WithTestId<
	ReusableBlockProps &
		ColorProps &
		BorderProps &
		TextProps &
		BoxProps &
		GridProps
>

export type {
	ElementSize,
	ElementSpaceOrAuto,
	ReusableBlockProps,
	ElementSizeProps,
	BlockProps,
	ColorProps,
	MarginProps,
	PaddingProps,
	TextProps,
	Unit,
	BoxProps,
}
