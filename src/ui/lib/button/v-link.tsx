import { ReusableBlockProps } from '../block'
import BaseButton, { BaseButtonProps } from './base-button'

export default function LinkButton({
	children,
	testId = 'linkButton',
	...props
}: Partial<BaseButtonProps> & Partial<ReusableBlockProps>) {
	return (
		<BaseButton {...props} testId={testId}>
			{children}
		</BaseButton>
	)
}
