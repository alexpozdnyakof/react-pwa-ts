import { ForwardedRef, forwardRef } from 'react'
import getControlBoxShadow from '../../theme/control-box-shadow'
import { Block, EventHandlers } from '../block'

interface TextFieldProps {
	value: string
	testId: string
	onKeyDown: EventHandlers['onKeyDown']
}

const TextField = forwardRef(
	(
		{ value, onKeyDown, testId = 'textfield' }: Partial<TextFieldProps>,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		const attributes = { value } as any
		return (
			<Block
				testId={testId}
				as='input'
				ref={ref}
				attributes={attributes}
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
					borderColor: 'borderLightFocus',
					boxShadow: getControlBoxShadow().focus,
				}}
				transition='all ease 200ms'
				onKeyDown={onKeyDown}
			/>
		)
	}
)
TextField.displayName = 'TextField'
export default TextField
