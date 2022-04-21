import { StyledBlock } from './styled-components'
import { BlockAttributes, BlockProps, TestIdAttribute } from './types'

type BlockComposedProps = React.PropsWithChildren<
	Partial<BlockProps> &
		Partial<BlockAttributes> &
		Partial<TestIdAttribute> &
		Partial<{ onInput: (e: any) => void }>
>

export default function Block({
	children,
	attributes = {},
	testId = 'StyledBlock',
	onInput,
	...props
}: BlockComposedProps) {
	const { contentEditable } = attributes
	return (
		<StyledBlock
			{...props}
			data-testid={testId}
			contentEditable={contentEditable}
			onBlur={onInput}
		>
			{children}
		</StyledBlock>
	)
}
