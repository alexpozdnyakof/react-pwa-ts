import { Color, TextSize, TextType, TextWeight } from '../../theme'
import { WithTestId } from '../helpers'

type Unit = 'pct' | 'vh' | 'vw' | 'px'

type ValueWithUnit = { value: number; unit: Unit }
type ElementSize = number | ValueWithUnit | 'max-content'
type ElementSpace = number
type ElementSpaceOrAuto = ElementSpace | 'auto' | string
interface ElementSizeProps {
	width: ElementSize
	height: ElementSize
	maxWidth: ElementSize
	maxHeight: ElementSize
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
	justifyContent:
		| 'center'
		| 'flex-end'
		| 'flex-start'
		| 'space-around'
		| 'space-between'
		| 'space-evenly'
	position: 'relative' | 'static' | 'sticky' | 'absolute'
	overflow: 'hidden' | 'visible' | 'scroll'
	boxShadow: string
	zIndex: number
	cursor: 'pointer' | 'none' | 'disabled'
	outline: string
}

type PositionProps = Record<'top' | 'right' | 'bottom' | 'left', number>
interface TextProps {
	fontSize: TextSize
	fontWeight: TextWeight
	lineHeight: number | ValueWithUnit
	fontFamily: TextType
	textAlign: 'left' | 'center' | 'right'
	letterSpacing: number
	textOverflow?: 'clip' | 'ellipsis'
	whiteSpace?:
		| 'normal'
		| 'nowrap'
		| 'pre'
		| 'pre-wrap'
		| 'pre-line'
		| 'break-spaces'
}
interface GridProps {
	gridAutoFlow: 'row' | 'column' | 'dense' | 'row dense' | 'column-dense'
	gap: number
	rowGap: number
	columnGap: number
	gridTemplateColumns: string
}

interface ShowAs {
	as: 'div' | 'span' | 'p' | 'button' | 'input' | 'svg' | 'kbd'
}

interface EventHandlers {
	onClick: <T>(e?: React.MouseEvent<T>) => void
	onKeyDown: <T>(e?: React.KeyboardEvent<T>) => void
	onChange: <T>(e?: React.KeyboardEvent<T>) => void
}

interface AnimationProps {
	transition: string
}

interface BlockAttributes {
	value: string
	ariaLabel: string
	placeholder: string
}

type ReusableBlockProps = ElementSizeProps &
	MarginProps &
	PaddingProps &
	PositionProps &
	AnimationProps & { opacity: number } & BlockAttributes &
	GridProps &
	BoxProps

interface Pseudo {
	hover: Partial<ColorProps & BoxProps>
	focus: Pick<ColorProps, 'borderColor'>
	focusVisible: Pick<ColorProps, 'borderColor'> & { boxShadow: string }
}

type BlockProps = WithTestId<
	ReusableBlockProps &
		ColorProps &
		BorderProps &
		TextProps &
		BoxProps &
		GridProps &
		ShowAs &
		EventHandlers &
		AnimationProps &
		Pseudo
>

export type {
	ElementSize,
	ElementSpaceOrAuto,
	ReusableBlockProps,
	ElementSizeProps,
	EventHandlers,
	BlockProps,
	ColorProps,
	MarginProps,
	PaddingProps,
	GridProps,
	TextProps,
	Unit,
	BoxProps,
	Pseudo,
}
