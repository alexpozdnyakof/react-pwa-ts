enum Space {
	none = 'none',
	micro = 'micro',
	small = 'size',
	medium = 'medium',
	large = 'large',
	xlarge = 'xlarge',
}

enum BorderRadius {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

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
	lineHeight: string
	letterSpacing: string
	color: string
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

interface ReusableBoxProps extends MarginProps, PaddingProps {
	backgroundColor: string
	borderRadius: BorderRadius
	width: string
	height: string
}

interface BlockProps extends FlexProps, FontProps, GridProps, ReusableBoxProps {
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
}

export type { BlockProps, ReusableBoxProps }
