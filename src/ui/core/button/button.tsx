import React from 'react'
import { StyledButton } from './styles'

type ButtonType = 'primary' | 'secondary'

export default function Button({
	children,
	onClick,
	type = 'primary',
}: React.PropsWithChildren<
	Partial<{
		onClick?: (event: React.SyntheticEvent) => void
		type: ButtonType
	}>
>) {
	return (
		<StyledButton type={type} onClick={onClick}>
			{children}
		</StyledButton>
	)
}
