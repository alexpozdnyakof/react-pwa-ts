/* eslint-disable react/require-default-props */
import { cloneElement, ReactElement } from 'react'
import { Stack } from '../layout'
import { TextField } from '../lib'
import { ReusableBlockProps } from '../lib/block'

import Label from './label'

interface Props {
	testId?: string
	label?: string
	id?: string
	children: ReactElement<typeof TextField>
}

export default function FormControl({
	testId,
	label,
	id,
	children,
	...blockProps
}: Props & Partial<ReusableBlockProps>) {
	return (
		<Stack testId={testId} space={1} {...blockProps}>
			{label && (
				<Label htmlFor={id} testId='label'>
					{label}
				</Label>
			)}
			{cloneElement(children, { id } as any)}
		</Stack>
	)
}

export type { Props as FormControlProps }
