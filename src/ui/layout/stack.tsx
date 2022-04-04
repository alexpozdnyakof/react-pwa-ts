import styled from 'styled-components'

import { Box, ReusableBoxProps } from './box'

import { WithSpace } from './types'

type StackProps = WithSpace<Partial<ReusableBoxProps>>

const StyledStack = styled(Box)<StackProps>`
	display: flex;
	justify-content: flex-start;

	> * + * {
		margin-top: ${({ theme, space }) => `${theme.space[space]}px`};
	}
`

export function Stack({
	children,
	space,
	align = 'flex-start',
}: React.PropsWithChildren<StackProps>) {
	return (
		<StyledStack space={space} direction='column' align={align}>
			{children}
		</StyledStack>
	)
}
