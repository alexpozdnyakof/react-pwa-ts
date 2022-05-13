import React from 'react'
import { ReusableBlockProps } from '../../lib/block'

interface Props {
	space: 0 | 0.5 | 1 | 2 | 4
	spaceUnit: number
	testId: string
}

type StackProps = React.PropsWithChildren<Partial<Props & ReusableBlockProps>>

const STACK_SPACE_VALUES = [0, 0.5, 1, 2, 4]
export type { StackProps }
export { STACK_SPACE_VALUES }
