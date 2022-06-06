import { ForwardedRef, forwardRef } from 'react'
import { TextField } from '../lib'
import { ReusableBlockProps } from '../lib/block'
import { TextFieldProps } from '../lib/text-field'

import FormControl, { FormControlProps } from './form-control'

type InputProps = Omit<FormControlProps, 'children'> &
	Partial<TextFieldProps> & { ref: ForwardedRef<HTMLInputElement> }

function UnforwardedInput({
	id,
	label,
	placeholder,
	testId,
	onKeyDown,
	onChange,
	value,
	size,
	name,
	type = 'text',
	ref,
	...blockProps
}: InputProps & Partial<ReusableBlockProps>) {
	return (
		<FormControl
			id={id}
			label={label}
			{...blockProps}
			testId='form-control-input'
		>
			<TextField
				ref={ref}
				placeholder={placeholder}
				value={value}
				testId={testId}
				onKeyDown={onKeyDown}
				onChange={onChange}
				size={size}
				name={name}
				type={type}
			/>
		</FormControl>
	)
}

const Input = forwardRef(
	(props: InputProps, ref: ForwardedRef<HTMLInputElement>) =>
		UnforwardedInput({ ...props, ref })
)
Input.displayName = 'Input'

export default Input
