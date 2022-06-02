import { PropsWithChildren } from 'react'
import { Stack } from '../../layout'

interface Props {
	testId: string
}

export default function FormControl({
	testId,
	children,
}: Partial<Props> & PropsWithChildren<{}>) {
	return (
		<Stack testId={testId} space={1}>
			{children}
		</Stack>
	)
}
