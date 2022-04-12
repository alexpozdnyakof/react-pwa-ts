import { Color, LineHeight, Space, BorderRadius } from '../../styles'

interface FlexProps {
	flexDirection: 'column' | 'row'
	flexWrap: 'nowrap' | 'wrap'
	justifyContent:
		| 'center'
		| 'flex-end'
		| 'flex-start'
		| 'space-around'
		| 'space-between'
		| 'space-evenly'
}

interface GridProps {
	gridAutoFlow: 'row' | 'column' | 'dense' | 'row dense' | 'column-dense'
	gap: string
	rowGap: string
	columnGap: string
	gridTemplateColumns: string
}

interface FontProps {
	fontSize: string
	fontWeight: 400 | 500 | 600 | 900 | 'normal' | 'bold'
	lineHeight: LineHeight
	letterSpacing: string
	color: Color
}

interface PaddingProps {
	padding: Space
	paddingTop: Space
	paddingRight: Space
	paddingBottom: Space
	paddingLeft: Space
}

interface MarginProps {
	margin: Space
	marginTop: Space
	marginRight: Space
	marginBottom: Space
	marginLeft: Space
}

interface BorderProps {
	borderRadius: BorderRadius
	borderColor: Color
	borderWidth: string
	borderStyle: 'none' | 'hidden' | 'dotted' | 'solid' | 'dashed' | 'double'
}

interface ReusableBlockProps extends MarginProps, PaddingProps, BorderProps {
	backgroundColor: Color

	width: string
	height: string
}
interface BlockProps
	extends FlexProps,
		FontProps,
		GridProps,
		ReusableBlockProps {
	textAlign: 'left' | 'center' | 'right'
	boxSizing: 'border-box' | 'content-box'
	alignItems: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch'
	display:
		| 'block'
		| 'flex'
		| 'grid'
		| 'inline'
		| 'inline-block'
		| 'inline-flex'
		| 'none'
	position: 'relative' | 'static' | 'sticky' | 'absolute'
	overflow: 'hidden' | 'visible'
}

export type {
	BlockProps,
	ReusableBlockProps,
	FontProps,
	PaddingProps,
	MarginProps,
}
