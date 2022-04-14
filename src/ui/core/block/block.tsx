import { StyledBlock } from './styled-components'
import { BlockAttributes, BlockProps, TestIdAttribute } from './types'

type BlockComposedProps = React.PropsWithChildren<
	Partial<BlockProps> & Partial<BlockAttributes> & Partial<TestIdAttribute>
>

export default function Block({
	children,
	attributes = {},
	testId = 'StyledBlock',
	...props
}: BlockComposedProps) {
	const { contentEditable } = attributes
	return (
		<StyledBlock
			{...props}
			data-testid={testId}
			contentEditable={contentEditable}
		>
			{children}
		</StyledBlock>
	)
}
