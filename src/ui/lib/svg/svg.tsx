import {
	Block,
	ColorProps,
	ElementSizeProps,
	ReusableBlockProps,
} from '../block'
import { WithTestId } from '../helpers'

type SvgProps = React.PropsWithChildren<
	Partial<
		WithTestId<
			ElementSizeProps & Pick<ColorProps, 'color'> & ReusableBlockProps
		>
	>
>

export default function Svg({ children, ...props }: SvgProps) {
	return (
		<Block as='svg' {...props}>
			{children}
		</Block>
	)
}
