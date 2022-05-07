import React from 'react'
import { Color, Size } from '../../styles'
import { CheckIcon } from '../icon'
import { StyledCheckbox } from './styled-components'

type CheckboxProps = {
	checked: boolean
	disabled: boolean
	onClick?: (e: React.MouseEvent) => void
}

const CheckboxButton = React.forwardRef(
	(
		{ checked = false, disabled = false, onClick }: Partial<CheckboxProps>,
		ref: React.ForwardedRef<HTMLButtonElement>
	) => (
		<StyledCheckbox
			checked={checked}
			disabled={disabled}
			onClick={onClick}
			ref={ref}
		>
			<CheckIcon
				size={Size.small}
				viewBox='0 0 14 14'
				fill={checked ? Color.white : 'transparent'}
				stroke={checked ? Color.white : 'transparent'}
			/>
		</StyledCheckbox>
	)
)

export default CheckboxButton
