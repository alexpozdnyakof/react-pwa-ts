import { Block, ColorProps, ElementSizeProps } from '../block'
import { WithTestId } from '../helpers'

type SvgProps = React.PropsWithChildren<
	Partial<WithTestId<ElementSizeProps & Pick<ColorProps, 'color'>>>
>

export default function Svg({ children, ...props }: SvgProps) {
	return (
		<Block as='svg' {...props}>
			{children}
		</Block>
	)
}
