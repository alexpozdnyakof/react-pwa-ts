import { Color, FontSize, LineHeight } from '../../styles'
import { Block } from '../block'

type TypographyElementProps = React.PropsWithChildren<
	Partial<{ color: Color; width: string }>
>

function Body({ children, ...props }: TypographyElementProps) {
	return (
		<Block
			{...props}
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

function Button({ children, ...props }: TypographyElementProps) {
	return (
		<Block
			{...props}
			fontSize={FontSize.body}
			lineHeight={LineHeight.body}
			fontWeight={600}
		>
			{children}
		</Block>
	)
}

function TaskTitle({ children, ...props }: TypographyElementProps) {
	return (
		<Block
			{...props}
			fontSize={FontSize.body}
			lineHeight={LineHeight.medium}
			fontWeight={400}
		>
			{children}
		</Block>
	)
}

function SubTitle({ children, ...props }: TypographyElementProps) {
	return (
		<Block
			{...props}
			fontSize={FontSize.medium}
			lineHeight={LineHeight.large}
			fontWeight={600}
		>
			{children}
		</Block>
	)
}

function Title({ children, ...props }: TypographyElementProps) {
	return (
		<Block
			{...props}
			fontSize={FontSize.large}
			lineHeight={LineHeight.large}
			fontWeight={600}
		>
			{children}
		</Block>
	)
}

function Caption({ children, ...props }: TypographyElementProps) {
	return (
		<Block
			{...props}
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
const Typography = { Caption, Title, TaskTitle, SubTitle, Button, Body }

export default Typography
