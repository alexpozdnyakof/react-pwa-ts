import React from 'react'

interface Props {
	space: 0 | 0.5 | 1 | 2 | 4
	spaceUnit: number
	testId: string
}

type StackProps = React.PropsWithChildren<Partial<Props>>

const STACK_SPACE_VALUES = [0, 0.5, 1, 2, 4]
export type { StackProps }
export { STACK_SPACE_VALUES }
