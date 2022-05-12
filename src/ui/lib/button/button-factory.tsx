import React from 'react'
import { ButtonFactoryProps } from './types'
import LinkButton from './button-link'
import OutlineButton from './button-outline'

export default function ButtonFactory({
	children,
	variant = 'outline',
	...props
}: ButtonFactoryProps) {
	const SelectedButton = variant === 'outline' ? OutlineButton : LinkButton

	return <SelectedButton {...props}>{children}</SelectedButton>
}
