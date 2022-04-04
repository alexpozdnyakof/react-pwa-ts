import { Colors, LineHeight, TextSize } from '../../../styles'
import { Box } from '../../layout'

type TypographyProps = {
	size: TextSize
	lineHeight: LineHeight
	color: Colors | undefined
	children: string
}

type TypographyElementProps = Pick<TypographyProps, 'color' | 'children'>

function Typography({
	size,
	lineHeight,
	color = Colors.textPrimary,
	children,
}: TypographyProps) {
	return (
		<Box fontSize={size} lineHeight={lineHeight} color={color}>
			{children}
		</Box>
	)
}

function Body({
	color,
	children,
}: Pick<TypographyProps, 'color' | 'children'>) {
	return (
		<Typography
			color={color}
			size={TextSize.default}
			lineHeight={LineHeight.default}
		>
			{children}
		</Typography>
	)
}

function Button({
	color,
	children,
}: Pick<TypographyProps, 'color' | 'children'>) {
	return (
		<Typography
			color={color}
			size={TextSize.default}
			lineHeight={LineHeight.default}
		>
			{children}
		</Typography>
	)
}

function Title({ color, children }: TypographyElementProps) {
	return (
		<Typography
			color={color}
			size={TextSize.large}
			lineHeight={LineHeight.large}
		>
			{children}
		</Typography>
	)
}

function Caption({ color, children }: TypographyElementProps) {
	return (
		<Typography
			color={color}
			size={TextSize.small}
			lineHeight={LineHeight.small}
		>
			{children}
		</Typography>
	)
}

export { Caption, Title, Button, Body }
