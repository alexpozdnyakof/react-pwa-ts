import React from 'react'

import { Block, EventHandlers } from '../block'
import { WithTestId } from '../helpers'

export type ButtonProps = React.PropsWithChildren<
	Partial<WithTestId<Pick<EventHandlers, 'onClick'>>>
>
export default function Button({ children, onClick, testId }: ButtonProps) {
	return (
		<Block
			as='button'
			color='action'
			fontWeight='bold'
			lineHeight={24}
			letterSpacing={-0.01}
			maxWidth='max-content'
			onClick={onClick}
			testId={testId}
		>
			{children}
		</Block>
	)
}
