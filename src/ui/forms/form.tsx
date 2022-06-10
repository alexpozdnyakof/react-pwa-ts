import { FormEvent, PropsWithChildren } from 'react'
import { Block } from '../lib'
import { ReusableBlockProps } from '../lib/block'

interface Props {
	onSubmit: (event: FormEvent) => void
	testId: string
}

export default function Form({
	onSubmit,
	testId,
	children,
}: Partial<Props> & PropsWithChildren<{}> & Partial<ReusableBlockProps>) {
	return (
		<Block
			as='form'
			testId={testId}
			onSubmit={(event: FormEvent) => {
				event.preventDefault()
				if (onSubmit) onSubmit(event)
			}}
		>
			{children}
		</Block>
	)
}
