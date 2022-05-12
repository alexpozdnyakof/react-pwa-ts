import { Block } from '../block'
import { ButtonProps } from './types'

export default function LinkButton({
	children,
	onClick,
	testId = 'linkButton',
}: ButtonProps) {
	return (
		<Block
			as='button'
			color='action'
			fontWeight='bold'
			lineHeight={24}
			letterSpacing={-0.01}
			maxWidth='max-content'
			onClick={onClick}
			testId={testId}
		>
			{children}
		</Block>
	)
}
