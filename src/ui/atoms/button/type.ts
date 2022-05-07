import { SyntheticEvent } from 'react'

import { Kind, Size } from '../../styles'

export type ButtonType = 'primary' | 'secondary'

interface ButtonProps {
	kind: Kind | undefined
	size: Size | undefined
	startEnhancer?: React.ReactNode | string
	endEnhancer?: React.ReactNode | string
	onClick?: (event: SyntheticEvent) => void
	onMouseOver?: (event: SyntheticEvent) => void
	onMouseLeave?: (event: SyntheticEvent) => void
}

export type { ButtonProps }
