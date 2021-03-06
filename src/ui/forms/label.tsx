/* eslint-disable react/require-default-props */
import { Block } from '../lib'

interface Props {
	htmlFor?: string
	children: string
	testId?: string
}

export default function Label({ children, htmlFor, testId }: Props) {
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
