/* eslint-disable react/require-default-props */
import { cloneElement, ReactElement } from 'react'
import { Stack } from '../layout'
import { TextField } from '../lib'
import { ReusableBlockProps } from '../lib/block'

import Error from './error'
import Label from './label'
import { ControlError } from './validators'

interface Props {
	testId?: string
	label?: string
	id?: string
	children: ReactElement<typeof TextField>
	errors?: Array<ControlError>
}

export default function FormControl({
	testId,
	label,
	id,
	children,
	errors = [],
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
			{errors.map(error => (
				<Error key={'name_'.concat(error.type)}>{error.message}</Error>
			))}
		</Stack>
	)
}

export type { Props as FormControlProps }
