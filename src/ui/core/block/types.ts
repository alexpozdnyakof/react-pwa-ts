import { HTMLAttributes } from 'react'
import { Color, LineHeight, Space, BorderRadius, FontSize } from '../../styles'

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
	fontSize: FontSize
	fontWeight: 400 | 500 | 600 | 900 | 'normal' | 'bold'
	lineHeight: LineHeight
	letterSpacing: string
	color: Color
	fontFamily: string
	textOverflow: 'clip' | 'ellipsis'
	whiteSpace:
		| 'normal'
		| 'nowrap'
		| 'pre'
		| 'pre-wrap'
		| 'pre-line'
		| 'break-spaces'
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

type BorderStyle = 'none' | 'solid' | 'dashed'
interface BorderProps {
	borderRadius: BorderRadius
	borderColor: Color
	borderWidth: string
	borderStyle: BorderStyle
	borderBottomColor: Color
	borderBottomWidth: string
	borderBottomStyle: BorderStyle
	borderRightColor: Color
	borderRightWidth: string
	borderRightStyle: BorderStyle
}

interface ReusableBlockProps extends MarginProps, PaddingProps, BorderProps {
	backgroundColor: Color

	width: string
	height: string
}

interface BlockAttributes {
	attributes: HTMLAttributes<HTMLDivElement>
}

interface TestIdAttribute {
	testId: string
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
	overflow: 'hidden' | 'visible' | 'scroll'
	top: string
	right: string
	bottom: string
	left: string
	zIndex: number
}

export type {
	BlockAttributes,
	BlockProps,
	ReusableBlockProps,
	FontProps,
	PaddingProps,
	MarginProps,
	TestIdAttribute,
}
