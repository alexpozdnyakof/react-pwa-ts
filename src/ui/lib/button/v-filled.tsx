import getControlBoxShadow from '../../theme/control-box-shadow'
import { ReusableBlockProps } from '../block'
import BaseButton, { BaseButtonProps } from './base-button'

export default function FilledButton({
	testId = 'filledButton',
	children,
	...props
}: Partial<BaseButtonProps> & Partial<ReusableBlockProps>) {
	const styles = {
		color: 'text' as 'text',
		boxShadow: getControlBoxShadow().action,
		py: 2,
		px: 8,
		m: 2,
		backgroundColor: 'action' as 'action',
		hover: {
			backgroundColor: 'actionHover' as 'actionHover',
		},
	}

	return (
		<BaseButton {...{ ...props, ...styles, testId }}>{children}</BaseButton>
	)
}
