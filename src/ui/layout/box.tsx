import styled from 'styled-components'
import { BorderRadius, Space } from '../../styles/types'

interface BoxPaddingProps {
	padding: Space
	paddingLeft: Space
	paddingRight: Space
	paddingTop: Space
	paddingBottom: Space
}

type MarginProp = Space | 'auto'
interface BoxMarginProps {
	margin: MarginProp
	marginLeft: MarginProp
	marginRight: MarginProp
	marginTop: MarginProp
	marginBottom: MarginProp
}

type BoxDisplay =
	| 'block'
	| 'flex'
	| 'inline'
	| 'inline-block'
	| 'inline-flex'
	| 'none'

type BoxSizing = 'border-box' | 'content-box'
type BoxFlexDirection = 'column' | 'row'
type BoxFlexWrap = 'nowrap' | 'wrap'
type BoxAlignItems = 'center' | 'flex-end' | 'flex-start' | 'baseline'
type BoxJustifyContent =
	| 'center'
	| 'flex-end'
	| 'flex-start'
	| 'space-around'
	| 'space-between'
	| 'space-evenly'

type WidthOrHeight =
	| number
	| 'auto'
	| 'max-content'
	| 'min-content'
	| 'fit-content'

interface TextProps {
	fontSize: string
	lineHeight: string
	letterSpacing: string
}

interface ReusableBoxProps extends Partial<BoxPaddingProps & BoxMarginProps> {
	width: WidthOrHeight
	height: WidthOrHeight
	align: BoxAlignItems
	justifyContent: BoxJustifyContent
	direction: BoxFlexDirection
}

interface BoxProps extends ReusableBoxProps, Partial<TextProps> {
	wrap: BoxFlexWrap
	display: BoxDisplay
	boxSizing: BoxSizing
	backgroundColor: string
	background: string
	borderRadius?: BorderRadius
}

function getWidthOrHeight(value: WidthOrHeight): string {
	if (typeof value === 'string') return value
	return `${value}px`
}

const StyledBox = styled.div(
	({
		align,
		width,
		height,
		direction,
		wrap,
		justifyContent,
		display,
		backgroundColor,
		background,
	}: BoxProps) => ({
		alignItems: align,
		width: getWidthOrHeight(width),
		height: getWidthOrHeight(height),
		flexDirection: direction,
		flexWrap: wrap,
		justifyContent,
		display,
		backgroundColor,
		background,
	})
)

const StyledBoxWithPaddings = styled(StyledBox)<BoxProps>`
	${({ theme, borderRadius }) =>
		borderRadius && `border-radius: ${theme.borderRadius[borderRadius]}px`};
	${({ theme, padding }) => padding && `padding: ${theme.space[padding]}px`};
	${({ theme, paddingTop }) =>
		paddingTop && `padding-top: ${theme.space[paddingTop]}px`};
	${({ theme, paddingRight }) =>
		paddingRight && `padding-right: ${theme.space[paddingRight]}px`};
	${({ theme, paddingLeft }) =>
		paddingLeft && `padding-left: ${theme.space[paddingLeft]}px`};
	${({ theme, paddingBottom }) =>
		paddingBottom && `padding-bottom: ${theme.space[paddingBottom]}px`};
	${({ theme, margin }) => margin && `margin: ${theme.space[margin]}px`};
	${({ theme, marginTop }) =>
		marginTop && `margin-top: ${theme.space[marginTop]}px`};
	${({ theme, marginRight }) =>
		marginRight && `margin-right: ${theme.space[marginRight]}px`};
	${({ theme, marginLeft }) =>
		marginLeft && `margin-left: ${theme.space[marginLeft]}px`};
	${({ theme, marginBottom }) =>
		marginBottom && `margin-bottom: ${theme.space[marginBottom]}px`};
`

export function Box({
	align = 'flex-start',
	width = 'auto',
	height = 'auto',
	direction = 'row',
	wrap = 'wrap',
	justifyContent = 'flex-start',
	display = 'block',
	boxSizing = 'border-box',
	backgroundColor = 'transparent',
	background = 'none',
	children,
	...props
}: Partial<React.PropsWithChildren<BoxProps>>) {
	return (
		<StyledBoxWithPaddings
			align={align}
			width={width}
			height={height}
			direction={direction}
			wrap={wrap}
			display={display}
			justifyContent={justifyContent}
			boxSizing={boxSizing}
			backgroundColor={backgroundColor}
			background={background}
			{...props}
		>
			{children}
		</StyledBoxWithPaddings>
	)
}

export type {
	BoxPaddingProps,
	BoxMarginProps,
	BoxDisplay,
	BoxFlexDirection,
	BoxFlexWrap,
	BoxAlignItems,
	BoxJustifyContent,
	ReusableBoxProps,
}
