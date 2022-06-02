import { Block } from '../block'

interface Props {
	controlId: string
	children: string
	testId: string
}

export default function Label({ children, controlId, testId }: Partial<Props>) {
	return (
		<Block
			as='label'
			testId={testId}
			forId={controlId}
			fontSize='body'
			lineHeight={20}
			letterSpacing={-0.01}
		>
			{children}
		</Block>
	)
}
