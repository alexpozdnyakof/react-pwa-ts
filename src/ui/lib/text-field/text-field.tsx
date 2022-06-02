import { ForwardedRef, forwardRef } from 'react'
import getControlBoxShadow from '../../theme/control-box-shadow'
import { Block, EventHandlers } from '../block'

interface TextFieldProps {
	value: string
	placeholder: string
	testId: string
	id: string
	ariaLabel: string
	onKeyDown: EventHandlers['onKeyDown']
	onChange: EventHandlers['onChange']
}

const TextField = forwardRef(
	(
		{ testId = 'textfield', id, ...props }: Partial<TextFieldProps>,
		ref: ForwardedRef<HTMLInputElement>
	) => (
		<Block
			testId={testId}
			id={id}
			as='input'
			ref={ref}
			{...props}
			fontSize='medium'
			fontFamily='sans'
			lineHeight={24}
			pl={12}
			pt={4}
			pb={4}
			backgroundColor='onSurface'
			borderColor='borderLight'
			borderStyle='solid'
			borderWidth={1}
			radius={6}
			boxShadow='none'
			width={{ value: 100, unit: 'pct' }}
			color='text'
			outline='none'
			focus={{ borderColor: 'borderLightFocus' }}
			focusVisible={{
				borderTopColor: 'borderLightFocus',
				borderRightColor: 'borderLightFocus',
				borderBottomColor: 'action',
				borderLeftColor: 'borderLightFocus',

				boxShadow: getControlBoxShadow().focus,
			}}
			transition='all ease 200ms'
		/>
	)
)

TextField.displayName = 'TextField'
export default TextField
