import { ForwardedRef, forwardRef } from 'react'
import getControlBoxShadow from '../../theme/control-box-shadow'
import { Block, BlockProps, EventHandlers } from '../block'

interface Props {
	value: string
	placeholder: string
	testId: string
	id: string
	ariaLabel: string
	onKeyDown: EventHandlers['onKeyDown']
	onChange: EventHandlers['onChange']
	ref: ForwardedRef<HTMLInputElement>
	size: 'medium' | 'large'
	name: string
	type: 'text' | 'password' | 'email'
}

function UnforwardedTextField({
	testId = 'textfield',
	id,
	ref,
	size = 'medium',
	name,
	type,
	...props
}: Partial<Props>) {
	const styles = {
		fontSize: 'medium',
		fontFamily: 'sans',
		lineHeight: 24,
		pl: 12,
		pt: 3,
		pb: 3,
		backgroundColor: 'onSurface',
		borderColor: 'borderLight',
		borderStyle: 'solid',
		borderWidth: 1,
		radius: 6,
		boxShadow: 'none',
		width: { value: 100, unit: 'pct' },
		color: 'text',
		outline: 'none',
		transition: 'all ease 200ms',
	} as Partial<BlockProps>

	const sizeMap: Record<Props['size'], Partial<BlockProps>> = {
		medium: { height: 32 },
		large: { height: 40 },
	}

	return (
		<Block
			as='input'
			// eslint-disable-next-line prettier/prettier
			{...{ ...props, ...styles, ...sizeMap[size], ref, id, testId, name, type }}
			focus={{ borderColor: 'borderLightFocus' }}
			focusVisible={{
				boxShadow: getControlBoxShadow().focus,
			}}
		/>
	)
}

const TextField = forwardRef(
	(props: Partial<Props>, ref: ForwardedRef<HTMLInputElement>) =>
		UnforwardedTextField({ ...props, ref })
)

TextField.displayName = 'TextField'

export type { Props as TextFieldProps }
export default TextField
