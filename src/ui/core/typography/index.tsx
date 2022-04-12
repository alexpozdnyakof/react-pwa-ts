import { FontSize, LineHeight } from '../../styles'
import { Block, FontProps } from '../block'

type TypographyElementProps = React.PropsWithChildren<
	Partial<Pick<FontProps, 'color'>>
>

function Body({ color, children }: TypographyElementProps) {
	return (
		<Block
			color={color}
			fontSize={FontSize.body}
			lineHeight={LineHeight.body}
			fontWeight={400}
			whiteSpace='nowrap'
			textOverflow='ellipsis'
			overflow='hidden'
		>
			{children}
		</Block>
	)
}

function Button({ color, children }: TypographyElementProps) {
	return (
		<Block
			color={color}
			fontSize={FontSize.body}
			lineHeight={LineHeight.body}
			fontWeight={600}
		>
			{children}
		</Block>
	)
}

function TaskTitle({ color, children }: TypographyElementProps) {
	return (
		<Block
			color={color}
			fontSize={FontSize.body}
			lineHeight={LineHeight.medium}
			fontWeight={400}
		>
			{children}
		</Block>
	)
}

function SubTitle({ color, children }: TypographyElementProps) {
	return (
		<Block
			color={color}
			fontSize={FontSize.medium}
			lineHeight={LineHeight.large}
			fontWeight={600}
		>
			{children}
		</Block>
	)
}

function Title({ color, children }: TypographyElementProps) {
	return (
		<Block
			color={color}
			fontSize={FontSize.large}
			lineHeight={LineHeight.large}
			fontWeight={600}
		>
			{children}
		</Block>
	)
}

function Caption({ color, children }: TypographyElementProps) {
	return (
		<Block
			color={color}
			fontSize={FontSize.small}
			lineHeight={LineHeight.small}
			fontWeight={400}
			whiteSpace='nowrap'
			textOverflow='ellipsis'
			overflow='hidden'
		>
			{children}
		</Block>
	)
}

export { Caption, Title, TaskTitle, SubTitle, Button, Body }
