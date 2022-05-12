import getControlBoxShadow from '../../theme/control-box-shadow'
import { Block, BlockProps } from '../block'
import { ButtonProps } from './types'

const baseButtonStyles = {
	fontWeight: 'bold',
	lineHeight: 24,
	letterSpacing: -0.01,
	maxWidth: 'max-content',
	display: 'inline-block',
	radius: 6,
}
export default function OutlineButton({
	children,
	onClick,
	testId = 'outlineButton',
}: ButtonProps) {
	const props = {
		...baseButtonStyles,
		color: 'text',
		boxShadow: getControlBoxShadow().default,
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 2,
		paddingBottom: 2,
		transition: 'box-shadow ease 200ms ,background-color ease 200ms',
		hover: {
			boxShadow: getControlBoxShadow().action,
			backgroundColor: 'actionHover',
		},
		onClick,
	} as Partial<BlockProps>

	return (
		<Block as='button' testId={testId} {...props}>
			{children}
		</Block>
	)
}
