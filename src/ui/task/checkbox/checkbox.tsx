import React, { SyntheticEvent } from 'react'
import { CheckboxCircle, CheckboxButton, Svg } from './styles'

type CheckboxProps = {
	checked: boolean
	onChange?: (e: SyntheticEvent) => void
}

export default function TaskCheckbox({
	checked = false,
}: React.PropsWithChildren<Partial<CheckboxProps>>) {
	return (
		<CheckboxButton checked={checked}>
			<CheckboxCircle>
				<Svg width='24px' height='24px'>
					<path
						fill='currentColor'
						d='M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z'
					/>
				</Svg>
			</CheckboxCircle>
		</CheckboxButton>
	)
}
