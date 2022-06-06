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
	minWidth: ElementSize
	minHeight: ElementSize
}

interface ColorProps {
	backgroundColor: Color
	borderColor: Color
	borderTopColor: Color
	borderRightColor: Color
	borderBottomColor: Color
	borderLeftColor: Color
	color: Color
	background: Color
}

interface BorderProps {
	borderWidth: number
	radius: number
	borderStyle: 'solid' | 'dashed'
}

type MarginProps = Partial<{
	m: ElementSpaceOrAuto
	mt: ElementSpaceOrAuto
	mr: ElementSpaceOrAuto
	mb: ElementSpaceOrAuto
	ml: ElementSpaceOrAuto
}>

type PaddingProps = Partial<{
	p: ElementSpace
	pt: ElementSpace
	pr: ElementSpace
	pb: ElementSpace
	pl: ElementSpace
	px: ElementSpace
	py: ElementSpace
}>

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
	position: 'relative' | 'static' | 'sticky' | 'absolute' | 'fixed'
	overflow: 'hidden' | 'visible' | 'scroll'
	boxShadow: string
	zIndex: number
	cursor: 'pointer' | 'none' | 'disabled'
	outline: string
	flex: string
}

type PositionProps = {
	top: number
	right: number
	bottom: number
	left: number
}

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
	as:
		| 'div'
		| 'span'
		| 'p'
		| 'button'
		| 'input'
		| 'svg'
		| 'kbd'
		| 'img'
		| 'label'
		| 'form'
}

interface EventHandlers {
	onClick: <T>(e?: React.MouseEvent<T>) => void
	onKeyDown: <T>(e?: React.KeyboardEvent<T>) => void
	onChange: <T>(e?: React.KeyboardEvent<T>) => void
	onMouseEnter: <T>(e?: React.MouseEvent<T>) => void
	onMouseLeave: <T>(e?: React.MouseEvent<T>) => void
	onSubmit: <T>(e?: React.FormEvent<T>) => void
}

interface AnimationProps {
	transition: string
	transform: string
	willChange: string
}

interface BlockAttributes {
	value: string
	ariaLabel: string
	placeholder: string
}
interface Pseudo {
	hover: Partial<ColorProps & BoxProps>
	focus: Pick<ColorProps, 'borderColor'>
	focusVisible: Partial<
		Pick<
			ColorProps,
			| 'borderColor'
			| 'borderLeftColor'
			| 'borderTopColor'
			| 'borderRightColor'
			| 'borderBottomColor'
		> & { boxShadow: string }
	>
}

type ReusableBlockProps = ElementSizeProps &
	MarginProps &
	PaddingProps &
	PositionProps &
	AnimationProps & { opacity: number } & BlockAttributes &
	GridProps &
	BoxProps &
	ColorProps & {
		pointerEvents: 'none' | 'auto'
	} & Pseudo &
	BorderProps &
	ShowAs

type BlockProps = WithTestId<
	ReusableBlockProps &
		BorderProps &
		TextProps &
		EventHandlers & {
			src: string
			htmlFor: string
			id: string
			name: string
			type: 'text' | 'password' | 'email' | 'button' | 'submit' | 'reset'
		}
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
