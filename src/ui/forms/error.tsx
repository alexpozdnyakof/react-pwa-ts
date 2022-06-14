import { Block } from '../lib'

interface Props {
	children: string
	// eslint-disable-next-line react/require-default-props
	testId?: string
}

export default function Error({ children, testId }: Props) {
	return (
		<Block
			testId={testId}
			fontSize='body'
			fontWeight='normal'
			color='error'
			lineHeight={20}
			letterSpacing={-0.01}
		>
			{children}
		</Block>
	)
}
