import { RefObject } from 'react'
import { StyledTextField } from './styles'

interface TextFieldProps {
	placeholder: string
	ref: RefObject<HTMLInputElement>
	onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function TextField({
	placeholder,
	ref,
	onKeyUp,
}: Partial<TextFieldProps>) {
	return (
		<StyledTextField
			ref={ref}
			placeholder={placeholder}
			onKeyUp={onKeyUp}
		/>
	)
}
