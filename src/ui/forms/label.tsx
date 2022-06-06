import { Block } from '../block'

interface Props {
	htmlFor: string
	children: string
	testId: string
}

export default function Label({ children, htmlFor, testId }: Partial<Props>) {
	return (
		<Block
			as='label'
			testId={testId}
			htmlFor={htmlFor}
			fontSize='body'
			fontWeight='semibold'
			color='text'
			lineHeight={20}
			letterSpacing={-0.01}
		>
			{children}
		</Block>
	)
}
