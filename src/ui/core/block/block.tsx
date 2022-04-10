import { StyledBlock } from './styled-components'
import { BlockProps } from './types'

export default function Block({
	children,
	...props
}: React.PropsWithChildren<Partial<BlockProps>>) {
	return (
		<StyledBlock {...props} data-testid='StyledBlock'>
			{children}
		</StyledBlock>
	)
}
