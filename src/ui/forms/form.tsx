import { FormEvent, PropsWithChildren } from 'react'
import { Block } from '../lib'
import { ReusableBlockProps } from '../lib/block'

interface Props {
	onSubmit: <T>(e?: FormEvent<T>) => void
	testId: string
}

export default function Form({
	onSubmit,
	testId,
	children,
}: Partial<Props> & PropsWithChildren<{}> & Partial<ReusableBlockProps>) {
	return (
		<Block as='form' testId={testId} onSubmit={onSubmit}>
			{children}
		</Block>
	)
}
