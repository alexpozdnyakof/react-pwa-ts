import React from 'react'
import { StyledButton } from './styles'

export default function Button({
	children,
	onClick,
}: React.PropsWithChildren<
	Partial<{
		onClick?: (event: React.SyntheticEvent) => void
	}>
>) {
	return <StyledButton onClick={onClick}>{children}</StyledButton>
}
