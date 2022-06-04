import getControlBoxShadow from '../../theme/control-box-shadow'
import { ReusableBlockProps } from '../block'
import BaseButton, { BaseButtonProps } from './base-button'

export default function OutlineButton({
	testId = 'outlineButton',
	children,
	...props
}: Partial<BaseButtonProps> & Partial<ReusableBlockProps>) {
	const styles = {
		color: 'text' as 'text',
		boxShadow: getControlBoxShadow().default,
		py: 2,
		px: 8,
		m: 2,
		hover: {
			boxShadow: getControlBoxShadow().action,
			backgroundColor: 'actionHover' as 'actionHover',
		},
	}

	return (
		<BaseButton {...{ ...props, ...styles, testId }}>{children}</BaseButton>
	)
}
