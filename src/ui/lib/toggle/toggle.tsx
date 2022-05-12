/* eslint-disable @typescript-eslint/no-unused-vars */
import { BlockProps } from '../../atoms/block'
import { Color } from '../../theme'
import getControlBoxShadow from '../../theme/control-box-shadow'
import { Block, EventHandlers } from '../block'
import { Icon } from '../icon'

export interface ToggleProps extends Pick<EventHandlers, 'onClick'> {
	on: boolean
}
export default function Toggle({ on, onClick }: ToggleProps) {
	const styles = {
		backgroundColor: on ? ('action' as Color) : undefined,
		color: 'white' as Color,
		width: 16,
		height: 16,
		radius: 6,
		transition: 'box-shadow ease 200ms ,background-color ease 200ms',
		boxShadow: on
			? getControlBoxShadow().action
			: getControlBoxShadow().default,
		hover: {
			boxShadow: getControlBoxShadow().action,
			backgroundColor: on
				? ('action' as Color)
				: ('actionHover' as Color),
		},
		display: 'flex' as 'flex',
		justifyContent: 'center' as 'center',
		alignItems: 'center' as 'center',
	}

	return (
		<Block as='button' {...styles} onClick={onClick}>
			<Icon
				icon='check'
				size='small'
				opacity={on ? 1 : 0}
				transition='opacity ease 200ms'
			/>
		</Block>
	)
}
